import C from '~/constants';

export default function search(state = Map, action) {
  switch (action.type) {
    case C.SEARCH_SET_QUERY:
      return state.set('query', action.query);
      break;
    default:
      return state;
  }
}
