import C from '~/constants';
import _ from 'lodash';

// Track listeners so we can remove them later
const listeners = {};


export function closeModal() {
  return (dispatch) => {
    dispatch({
      type: C.MODAL_SET_CLOSED,
    });
  };
}

export function openModal(modal) {
  return (dispatch) => {
    dispatch({
      type: C.MODAL_SET_OPEN,
      modal,
    });
  };
}

export function setModalData(type, newData) {
  return (dispatch, getState) => {
    let data = getState().modals.data;
    if (data === undefined) {
      data = {};
    }
    if (data[type] === undefined) {
      data[type] = {};
    }
    data[type] = _.merge(newData, data[type]);
    dispatch({
      type: C.MODAL_SET_DATA,
      data,
    });
  };
}

export function setModalVisibility(visibility) {
  return (dispatch) => {
    dispatch({
      type: C.MODAL_SET_VISIBILITY,
      visibility,
    });
  };
}
