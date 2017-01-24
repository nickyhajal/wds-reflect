import { Map } from 'immutable';

export default {
  app: Map({
    navOpen: false,
  }),
  modals: Map({
    open: false,
    visibility: 'hidden',
    data: {},
  }),
  auth: Map({
    me: false,
    status: 'ready',
    error: false,
  }),
  search: Map({
    query: '',
  }),
};
