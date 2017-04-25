import C from '~/constants';
import _ from 'lodash';
import { firedb } from '../store/fire';


const listeners = {};
export function updateQuantity(quantity) {
  return (dispatch) => {
    dispatch({
      type: C.CHECKOUT_SET_QUANTITY,
      quantity,
    });
  };
}

export function setCheckoutCC(newCCData) {
  return (dispatch, getState) => {
    const cc = _.assign({}, getState().checkout.get('cc'), newCCData);
    dispatch({
      type: C.CHECKOUT_SET_CC,
      cc,
    });
  };
}

export function updateCheckoutProcessStatus(processStatus) {
  if (processStatus === 'success') {
    window.localStorage.removeItem('productAction');
  }
  return (dispatch) => {
    dispatch({
      type: C.CHECKOUT_SET_PROCESS_STATUS,
      processStatus,
    });
  };
}

export function setProduct({ code, price, allowedQuantity, data, redirect, fee, description, product }) {
  return (dispatch) => {
    const action = {
      code,
      redirect,
      price,
      description,
      allowedQuantity,
      data,
      fee,
      product,
    };
    window.localStorage.setItem('productAction', JSON.stringify(action));
    action.type = C.CHECKOUT_SET_PRODUCT;
    dispatch(action);
  };
}

export function updateCheckoutStatus(status) {
  return (dispatch) => {
    dispatch({
      type: C.CHECKOUT_SET_STATUS,
      status,
    });
  };
}

export function setCheckoutError(error) {
  return (dispatch) => {
    dispatch({
      type: C.CHECKOUT_SET_ERROR,
      error,
    });
    setTimeout(() => {
      dispatch({
        type: C.CHECKOUT_SET_ERROR,
        error: false,
      });
    }, 10000);
  };
}

export function startListeningToPurchase(saleId, pathId) {
  return (dispatch) => {
    console.log(saleId, pathId)
    const path = `sales/${pathId}/${saleId}`;
    const id = `changed_${saleId}`;
    console.log(path, id)
    const getValue = () => {
      firedb.child(path).once('value').then((rsp) => {
        const state = rsp.val();
        console.log(state);
        if (state !== undefined && state) {
          if (state.status === 'error') {
            setCheckoutError(state.error)(dispatch);
          } else {
            updateCheckoutProcessStatus(state.status)(dispatch);
          }
        }
      });
    };
    if (listeners[id] === undefined) {
      listeners[id] = firedb.child(path).on('child_changed', () => {
        getValue();
      });
      getValue();
    }
  };
}

