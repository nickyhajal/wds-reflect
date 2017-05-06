import { createConstants } from 'redux-action-helper';

const host = window.location.host;
const constants = createConstants(
  // APP
  'APP_SET_MENU',
  'APP_SET_LOGIN_REDIRECT',
  'APP_SET_ASSETS',
  'APP_SET_SETTINGS',
  // AUTH
  'AUTH_SET_ME',
  'AUTH_SET_ERROR',
  'AUTH_SET_CARD',
  'AUTH_SET_STATUS',
  'AUTH_LOGOUT',
  'AUTH_SET_USE_EXISTING_CARD',
  'AUTH_SET_USERNAME_STATUS',
  // MAIN PANEL ACTIONS
  'MODAL_SET_OPEN',
  'MODAL_SET_DATA',
  'MODAL_SET_CLOSED',
  'MODAL_SET_VISIBILITY',
  // SEARCH
  'SEARCH_SET_QUERY',
  // CHECKOUT
  'CHECKOUT_SET_STATUS',
  'CHECKOUT_SET_QUANTITY',
  'CHECKOUT_SET_ERROR',
  'CHECKOUT_SET_PROCESS_STATUS',
  'CHECKOUT_SET_PRODUCT',
  'CHECKOUT_SET_CC',
);

constants.fire_key = 'AIzaSyD77ljc6Wdoc3AKg_a1FnE58QDyCWhSgSA';
constants.fire_url = 'worlddominationsummit';
constants.stripe_pk = 'pk_test_8WKTIWKXB6T1eFT9sFqrymCM';
constants.protocol = 'https';
constants.url = 'wds.nky';
if (host === 'worlddominationsummit.com') {
  constants.stripe_pk = 'pk_live_v32iH6nfQOgPmKgQiNOrnZCi';
  constants.url = 'api.worlddominationsummit.com';
} else if (host === 'staging.wds.fm') {
  constants.url = 'staging.worlddominationsummit.com';
} else {
  constants.protocol = 'http';
}
constants.apiUrl = `${constants.url}/api`;
constants.graphUrl = `${constants.protocol}://${constants.url}/api/graphql`;
constants.ticketPrice = 647;
constants.color = {
  orange: '#CF7F1A',
  spice: 'rgba(174, 96, 0, 0.25)',
  gray: '#f2efed',
  green: '#B1BC40',
  forest: '#33571D',
  sea: '#62C0CA',
  blue: '#0373A5',
  white: '#FFFFFF',
  dark: '#21170A',
  black: '#000000',
  canvas: '#F1EEEC',
  brown: '#5F3D13',
};

module.exports = constants;
