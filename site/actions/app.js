import C from '~/constants';

export function openMenu(visibility) {
  return (dispatch) => {
    dispatch({
      type: C.APP_SET_MENU,
      visibility,
    });
  };
}

export function setLoginRedirect(loginRedirectUrl) {
  return (dispatch) => {
    dispatch({
      type: C.APP_SET_LOGIN_REDIRECT,
      loginRedirectUrl,
    });
  };
}
