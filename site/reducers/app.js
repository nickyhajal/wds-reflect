import C from '~/constants';

export default function app(state = false, action) {
  switch (action.type) {
    case C.APP_SET_MENU:
      return state.set('navOpen', action.visibility);
    case C.APP_SET_LOGIN_REDIRECT:
      return state.set('loginRedirectUrl', action.loginRedirectUrl);
    case C.APP_SET_ASSETS:
      return state.set('assets', action.assets);
    case C.APP_SET_SETTINGS:
      return state.set('settings', action.settings);
    default:
      return state;
  }
}
