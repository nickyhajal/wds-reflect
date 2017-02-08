import C from '~/constants';
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

export function updateCheckoutProcessStatus(processStatus) {
  return (dispatch) => {
    dispatch({
      type: C.CHECKOUT_SET_PROCESS_STATUS,
      processStatus,
    });
  };
}

export function updateCheckoutStatus(status, fireKey) {
  return (dispatch) => {
    console.log("KEY", fireKey);
    console.log(listeners);
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

export function startListeningToPurchase(saleId) {
  return (dispatch) => {
    const path = `sales/sale_wave1_2017/${saleId}`;
    const id = `changed_${saleId}`;
    if (listeners[id] === undefined) {
      listeners[id] = firedb.child(path).on('child_changed', (rsp) => {
        if (rsp.key === 'status') {
          updateCheckoutProcessStatus(rsp.val())(dispatch);
        }
      });
      firedb.child(path).once('value').then((rsp) => {
        updateCheckoutProcessStatus(rsp.val().status)(dispatch);
      });
    }
  };
}

