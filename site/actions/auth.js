import C from '~/constants';
import _ from 'lodash';
import api from '../utils/api';

export function updateAuth(me) {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_SET_ME,
      me,
    });
  };
}

export function updateMe(me, param) {
  return (dispatch, getState) => {
    let setMe = me;
    if (param !== undefined) {
      setMe = getState().auth.get('me');
      setMe[me] = param;
    }
    console.log(setMe)
    dispatch({
      type: C.AUTH_SET_ME,
      me: setMe,
    });
  };
}

export function mergeMe(me) {
  return (dispatch, getState) => {
    const existing = getState().auth.get('me');
    dispatch({
      type: C.AUTH_SET_ME,
      me: _.defaults(me, existing),
    });
  };
}

export function setAuthStatus(status) {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_SET_STATUS,
      status,
    });
  };
}

export function setAuthError(error, autohide = true) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: C.AUTH_SET_ERROR,
        error,
      });
    }, 1000);
    if (autohide) {
      setTimeout(() => {
        dispatch({
          type: C.AUTH_SET_STATUS,
          status: 'ready',
        });
      }, 6000);
    }
  };
}

export function attemptLogin() {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_ATTEMPT_LOGIN,
    });
  };
}

export function addInterest(interest) {
  return (dispatch, getState) => {
    const ints = getState().auth.get('me').interests;
    ints.push(interest);
    api('post user/interest', { interest_id: interest });
    updateMe('interests', ints)(dispatch, getState);
  };
}

export function removeInterest(interest) {
  return (dispatch, getState) => {
    const ints = getState().auth.get('me').interests;
    api('delete user/interest', { interest_id: interest });
    updateMe('interests', _.difference(ints, [interest]))(dispatch, getState);
  };
}
