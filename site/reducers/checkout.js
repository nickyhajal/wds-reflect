import C from '~/constants';
import { Map } from 'immutable';
import _ from 'lodash';

export default function checkout(state = Map, action) {
  switch (action.type) {
    case C.CHECKOUT_SET_STATUS:
      return state.set('status', action.status);
    case C.CHECKOUT_SET_PROCESS_STATUS:
      return state.set('processStatus', action.processStatus);
    case C.CHECKOUT_SET_QUANTITY:
      return state.set('quantity', action.quantity);
    case C.CHECKOUT_SET_PRODUCT:
      const p = _.defaults(action, {
        allowedQuantity: 0,
        fee: 0,
      });
      return state.withMutations((ctx) => {
        ctx.set('code', p.code);
        ctx.set('product', p.product);
        ctx.set('description', p.description);
        ctx.set('data', p.data);
        ctx.set('redirect', p.redirect);
        ctx.set('price', p.price);
        ctx.set('fee', p.fee);
        ctx.set('allowedQuantity', p.allowedQuantity);
      });
    case C.CHECKOUT_SET_CC:
      return state.set('cc', action.cc);
    case C.CHECKOUT_SET_ERROR:
      return state.withMutations((ctx) => {
        ctx.set('error', action.error);
        ctx.set('status', 'start');
        ctx.set('processStatus', false);
      });
    default:
      return state;
  }
}
