import { createConstants } from 'redux-action-helper';

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

);

constants.fire_key = 'AIzaSyD77ljc6Wdoc3AKg_a1FnE58QDyCWhSgSA';
constants.fire_url = 'worlddominationsummit';
constants.stripe_pk = 'pk_test_8WKTIWKXB6T1eFT9sFqrymCM';
// constants.url = 'wds.nky';
constants.url = 'staging.worlddominationsummit.com';
// constants.stripe_pk = 'pk_live_v32iH6nfQOgPmKgQiNOrnZCi';
// constants.url = 'api.worlddominationsummit.com';
constants.apiUrl = `${constants.url}/api`;

module.exports = constants;
