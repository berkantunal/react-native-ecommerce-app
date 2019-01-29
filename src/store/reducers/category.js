import {
  CATEGORY_PENDING,
  CATEGORY_FULFILLED,
  CATEGORY_REJECTED
} from '../actions/category';

const initialState = {
  fetching: false,
  fetched: false,
  list: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_PENDING:
      return {
        ...state,
        fetching: true
      }
    case CATEGORY_FULFILLED:
      return {
        ...state,
        list: action.payload,
        fetching: false,
        fetched: true
      }
    case CATEGORY_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
  }

  return state;
}
