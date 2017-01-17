import { Map } from 'immutable';

export default {
  modals: Map({
    open: false,
    visibility: 'hidden',
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
