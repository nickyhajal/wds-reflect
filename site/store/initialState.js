import { Map } from 'immutable';

export default {
  app: Map({
    navOpen: false,
    loginRedirectUrl: false,
    assets: Map({}),
  }),
  modals: Map({
    open: false,
    visibility: 'hidden',
    data: {},
  }),
  auth: Map({
    me: false,
    checked: false,
    status: 'ready',
    error: false,
  }),
  search: Map({
    query: '',
  }),
};
