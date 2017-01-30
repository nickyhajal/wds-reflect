import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/auth';
import store from '../core/store';
import api, { mock } from './api';

const Actions = bindActionCreators(AuthActions, store.dispatch);
const auth = {
  mock,
  getMe() {
    return api('get assets', { assets: 'me' })
    .then((raw) => {
      const rsp = raw.data;
      if (rsp.me) {
        Actions.updateAuth(rsp.me);
      } else {
        Actions.updateAuth(false);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  },
  loginWithHash(id, autohide = false) {
    auth.login(id, false, autohide);
  },
  login(id, pw, autohide = true) {
    Actions.setAuthStatus('loading');
    const params = {};
    if (pw !== undefined && pw) {
      params.email = id;
      params.pw = pw;
    } else if (id !== undefined) {
      params.hash = id;
    }
    return api('post user/login', params)
    .then((raw) => {
      const rsp = raw.data;
      console.log(rsp);
      if (rsp.loggedin && rsp.me) {
        Actions.updateAuth(rsp.me);
        Actions.setAuthStatus('success');
      } else {
        Actions.setAuthError("Hm, that didn't seem right. Try again?", autohide);
      }
    }).catch(() => {
      Actions.setAuthError("Hm, that didn't seem right. Try again?", autohide);
    });
  },
  createUser(userPkg) {
    const pkg = userPkg;
    pkg.login = true;
    pkg.ignore_existing = true;
    return api('post user', pkg);
  },
  reset(username, password, hash) {
    const pkg = {
      username,
      password,
      hash,
      domain: 'api.eventlayer.io',
      path: 'reset',
    };
    Actions.setAuthStatus('loading');
    api('post user/reset', pkg)
    .then((raw) => {
      const rsp = raw.data;
      if (rsp.not_existing) {
        Actions.setAuthError("Hm, that account doesn't exist. Try again?");
      } else if (rsp.msg) {
        Actions.setAuthError(rsp.msg);
      } else {
        Actions.setAuthStatus('success');
        if (hash !== undefined) {
          setTimeout(() => {
            location.pathname = '/';
          }, 6000);
        }
      }
    });
  },
};

export default auth;

