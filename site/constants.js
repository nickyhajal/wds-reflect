import { createConstants } from 'redux-action-helper';

const constants = createConstants(

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

// constants.apiUrl = 'api.worlddominationsummit.com/v1';
constants.apiUrl = 'ela.nky/v1';

module.exports = constants;
