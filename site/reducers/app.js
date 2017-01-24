import C from '~/constants';
import { Map } from 'immutable';

export default function app(state = false, action) {
  switch (action.type) {
    case C.APP_SET_MENU:
      return state.set('navOpen', action.visibility);
    default:
      return state;
  }
}
