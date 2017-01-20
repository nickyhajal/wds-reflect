import C from '~/constants';
import { Map } from 'immutable';

export default function tasks(state = false, action) {
  switch (action.type) {
    case C.MODAL_SET_OPEN:
      return state.withMutations((ctx) =>
        ctx
        .set('open', action.modal)
        .set('visibility', 'unhide')
      );
    case C.MODAL_SET_CLOSED: {
      return state.withMutations((ctx) =>
        ctx
        .set('open', false)
        .set('visibility', 'hiding')
      );
    }
    case C.MODAL_SET_VISIBILITY: {
      return state.set('visibility', action.visibility);
    }
    case C.MODAL_SET_DATA: {
      return state.set('data', action.data);
    }
    default:
      return state;
  }
}
