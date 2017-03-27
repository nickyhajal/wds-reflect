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
    usernameStatus: false,
    error: false,
  }),
  checkout: Map({
    quantity: 1,
    status: 'start',
    processStatus: false,
    processState: {},
    product: '',
    code: '',
    description: '',
    data: {},
    redirect: false,
    allowedQuantity: 0,
    price: '',
    meta: {},
    error: false,
    cc: { number: '', zip: '', cvv: '' },
  }),
  search: Map({
    query: '',
  }),
};
