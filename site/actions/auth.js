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

export function updateCard(card, existing) {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_SET_CARD,
      card,
      existing,
    });
  };
}

export function updateUseExistingCard(existing) {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_SET_USE_EXISTING_CARD,
      existing,
    });
  };
}

export function checkUsername(userName) {
  return (dispatch, getState) => {

    // If username was passed, continue
    if (userName !== undefined && userName && userName.length) {
      const me = getState().auth.get('me');

      // If the username is the same the user's current username, no notices
      if (me.origUsername !== undefined && me.origUsername === userName) {
        dispatch({
          type: C.AUTH_SET_USERNAME_STATUS,
          usernameStatus: false,
        });

      // If it's different, check away
      } else {
        api('get user/check_name', { user_name: userName })
        .then((rsp) => {
          const usernameStatus = rsp.data.exists ? 'not-available' : 'available';
          dispatch({
            type: C.AUTH_SET_USERNAME_STATUS,
            usernameStatus,
          });
        });
      }

    // No username passed, so clear any notices about the username
    } else {
      dispatch({
        type: C.AUTH_SET_USERNAME_STATUS,
        usernameStatus: false,
      });
    }
  };
}

export function updateMe(me, param) {
  return (dispatch, getState) => {
    let setMe = me;
    if (param !== undefined) {
      setMe = getState().auth.get('me');
      setMe[me] = param;
    }
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

export function logout() {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_LOGOUT,
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
    dispatch({
      type: C.AUTH_SET_ERROR,
      error,
    });
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
