import C from '~/constants';

export function setSearchQuery(query) {
  return (dispatch) => {
    dispatch({
      type: C.SEARCH_SET_QUERY,
      query
    });
  };
}