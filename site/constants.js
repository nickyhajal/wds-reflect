import { createConstants } from 'redux-action-helper';

const constants = createConstants(

  // APP
  'APP_SET_MENU',
  'APP_SET_LOGIN_REDIRECT',
  'APP_SET_ASSETS',

  // AUTH
  'AUTH_SET_ME',
  'AUTH_SET_ERROR',
  'AUTH_SET_STATUS',
  'AUTH_LOGOUT',

  // MAIN PANEL ACTIONS
  'MODAL_SET_OPEN',
  'MODAL_SET_DATA',
  'MODAL_SET_CLOSED',
  'MODAL_SET_VISIBILITY',

  // SEARCH
  'SEARCH_SET_QUERY',
);

constants.url = 'wds.nky';
// constants.url = 'api.worlddominationsummit.com';
constants.apiUrl = `${constants.url}/api`;

module.exports = constants;
