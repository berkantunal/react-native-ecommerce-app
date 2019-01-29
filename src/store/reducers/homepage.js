import {
  HOMEPAGE_PENDING,
  HOMEPAGE_FULFILLED,
  HOMEPAGE_REJECTED } from '../actions/homepage';

const initialState = {
  fetching: false,
  fetched: false,
  list: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOMEPAGE_PENDING:
      return {
        ...state,
        fetching: true
      }
    case HOMEPAGE_FULFILLED:
      return {
        ...state,
        list: action.payload,
        fetching: false,
        fetched: true
      }
    case HOMEPAGE_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }

  return state;
}
