import {
  FILTER_PENDING,
  FILTER_FULFILLED,
  FILTER_REJECTED,
  SET_FILTER
} from '../actions/filter';

const initialState = {
  fetching: false,
  fetched: false,
  list: [],
  filters: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PENDING:
      return {
        ...state,
        fetching: true
      }
    case FILTER_FULFILLED:
      const { id, Filters } = action.payload;

      const list = state.list;
      list[id] = Filters.filters;

      return {
        ...state,
        list,
        fetching: false,
        fetched: true
      }
    case FILTER_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      } 
    case SET_FILTER:
      return {
        ...state,
        filters: action.payload
      }
  }

  return state;
}
