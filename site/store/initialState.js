import { Map } from 'immutable';

export default {
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
