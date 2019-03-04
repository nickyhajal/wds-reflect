import { bindActionCreators } from 'redux';
import moment from 'moment';
import { browserHistory } from 'react-router';
import * as AuthActions from '../actions/auth';
import store from '../core/store';
import api, { mock } from './api';

const Actions = bindActionCreators(AuthActions, store.dispatch);
const auth = {
  mock,
  processAnswers(obj) {
    const me = obj;
    if (me.answers !== undefined) {
      me.answers = JSON.parse(me.answers);
    }
    return me;
  },
  setMe(raw, origUsername = false) {
    const rsp = raw.data;
    if (rsp.me) {
      if (origUsername && rsp.me.user_name !== undefined) {
        rsp.me.origUsername = rsp.me.user_name;
      }
      if (rsp.me.answers !== undefined) {
        rsp.me = auth.processAnswers(rsp.me);
      }
      Actions.updateAuth(rsp.me);
    } else {
      Actions.updateAuth(false);
    }
  },
  getMe() {
    return api('get assets', { assets: 'me' })
    .then((raw) => {
      auth.setMe(raw, 'origUsername');
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
        params.username = id;
        params.password = pw;
      } else if (id !== undefined) {
        params.hash = id;
      }
      return api('post user/login', params)
      .then((raw) => {
        const rsp = raw.data;
        auth.setMe(raw);
        if (rsp.loggedin && rsp.me) {
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
  logout(redirect = 'login') {
    return (new Promise((resolve) => {
      return api('post user/logout')
      .then(() => {
        Actions.logout();
        browserHistory.replace(`/${redirect}`);
        resolve();
      });
    }));
  },
  createUser(userPkg) {
    const pkg = userPkg;
    pkg.login = true;
    pkg.ignore_existing = true;
    Actions.updateAuth(userPkg);
    return api('post user', pkg)
    .then((raw) => {
      auth.setMe(raw);
    });
  },
  getCard() {
    api('get user/card', {})
    .then((raw) => {
      const rsp = raw.data;
      const now = moment();
      console.log(rsp);
      if (
        rsp.card !== undefined &&
        rsp.card &&
        ((
          rsp.card.exp_month >= now.format('M') &&
          rsp.card.exp_year >= now.format('YYYY')) ||
          rsp.card.exp_year > now.format('YYYY')
        )
      ) {
        console.log('>>>>>>>> got card, updating')
        Actions.updateCard(rsp.card, true);
      } else {
        Actions.updateCard(false, false);
      }
    });
  },
  charge(pkg) {
    return api('post product/charge', pkg);
  },
  reset(username, password, hash) {
    const pkg = {
      username,
      password,
      hash,
      domain: 'worlddominationsummit.com',
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
            browserHistory.replace('/login');
          }, 3000);
        }
      }
    });
  },
};

export default auth;

