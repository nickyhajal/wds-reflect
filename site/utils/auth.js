import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/auth';
import store from '../core/store';
import api, { mock } from './api';

const Actions = bindActionCreators(AuthActions, store.dispatch);
const auth = {
  mock,
  processAnswers(obj) {
    const me = obj;
    if (me.answers !== undefined) {
      me.answerList = JSON.parse(me.answers);
      me.answers = {};
      me.answerList.forEach((v, i) => {
        me.answers[v.question_id] = v.answer;
      });
    }
    return me;
  },
  getMe() {
    return api('get assets', { assets: 'me' })
    .then((raw) => {
      const rsp = raw.data;
      if (rsp.me) {
        if (rsp.me.answers !== undefined) {
          rsp.me = this.processAnswers(rsp.me);
        }
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
    return (new Promise((resolve, reject) => {
      auth.login(id, false, autohide)
      .then(resolve)
      .catch(reject);
    }));
  },
  login(id, pw, autohide = true) {
    return (new Promise((resolve, reject) => {
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
        if (rsp.loggedin && rsp.me) {
          if (rsp.me.answers !== undefined) {
            rsp.me = this.processAnswers(rsp.me);
          }
          Actions.updateAuth(rsp.me);
          Actions.setAuthStatus('success');
          resolve();
        } else {
          Actions.setAuthError("Hm, that didn't seem right. Try again?", autohide);
          reject();
        }
      }).catch(() => {
        Actions.setAuthError("Hm, that didn't seem right. Try again?", autohide);
        reject();
      });
    }));
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

