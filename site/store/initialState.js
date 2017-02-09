import { Map } from 'immutable';

export default {
  app: Map({
    navOpen: false,
    loginRedirectUrl: false,
    settings: 0,
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
  checkout: Map({
    quantity: 1,
    status: 'start',
    processStatus: false,
    processState: {},
    error: false,
    cc: { number: '', zip: '', cvv: '' },
  }),
  search: Map({
    query: '',
  }),
};
