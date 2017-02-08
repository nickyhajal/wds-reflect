import C from '~/constants';
import { Map } from 'immutable';

export default function checkout(state = Map, action) {
  switch (action.type) {
    case C.CHECKOUT_SET_STATUS:
      return state.set('status', action.status);
    case C.CHECKOUT_SET_PROCESS_STATUS:
      return state.set('processStatus', action.processStatus);
    case C.CHECKOUT_SET_QUANTITY:
      return state.set('quantity', action.quantity);
    case C.CHECKOUT_SET_ERROR:
      return state.withMutations((ctx) => {
        ctx.set('error', action.error);
        ctx.set('status', 'start');
      });
    default:
      return state;
  }
}
