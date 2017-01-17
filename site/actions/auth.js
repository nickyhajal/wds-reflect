import C from '~/constants';

export function updateAuth(me) {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_SET_ME,
      me,
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

export function setAuthError(error) {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_SET_ERROR,
      error,
    });
    setTimeout(() => {
      dispatch({
        type: C.AUTH_SET_STATUS,
        status: 'ready',
      });
    }, 6000);
  };
}

export function attemptLogin() {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_ATTEMPT_LOGIN,
    });
  };
}
