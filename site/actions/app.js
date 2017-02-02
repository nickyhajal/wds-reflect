import C from '~/constants';
import api from '../utils/api';
import _ from 'lodash';

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

export function syncAssets() {
  return (dispatch) => {
    api('get assets', { assets: 'interests' })
    .then((rsp) => {
      const assets = _.pick(rsp.data, ['interests']);
      dispatch({
        type: C.APP_SET_ASSETS,
        assets,
      });
    });
  };
}
