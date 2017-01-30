import C from '~/constants';

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
    if (param !== undefined && param) {
      setMe = getState().auth.get('me');
      setMe[me] = param;
    }
    dispatch({
      type: C.AUTH_SET_ME,
      me: setMe,
      param,
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
