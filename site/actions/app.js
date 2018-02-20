import C from '~/constants';
import _ from 'lodash';
import api from '../utils/api';
import { firedb } from '../store/fire';

const listeners = {};
export function startListeningToSettings() {
  return (dispatch) => {
    const path = 'state';
    const id = `changed_${path}`;
    if (listeners[id] === undefined) {
      const getValue = () => {
        firedb.child(path).once('value').then((rsp) => {
          const settings = rsp.val();
          dispatch({
            type: C.APP_SET_SETTINGS,
            settings,
          });
        });
      };

      listeners[id] = firedb.child(path).on('child_changed', () => {
        getValue();
      });
      getValue();
    }
  };
}

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
    api('get assets', { assets: 'interests,questions,pages' })
    .then((rsp) => {
      const assets = _.pick(rsp.data, ['interests', 'questions', 'pages']);
      dispatch({
        type: C.APP_SET_ASSETS,
        assets,
      });
    });
  };
}
