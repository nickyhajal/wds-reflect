import C from '~/constants';
import { Map } from 'immutable';

export default function app(state = false, action) {
  switch (action.type) {
    case C.APP_SET_MENU:
      return state.set('navOpen', action.visibility);
    case C.APP_SET_LOGIN_REDIRECT:
      return state.set('loginRedirectUrl', action.loginRedirectUrl);
    default:
      return state;
  }
}
