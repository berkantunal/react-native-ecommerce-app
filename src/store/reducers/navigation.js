import {
    NAVIGATION_PENDING,
    NAVIGATION_FULFILLED,
    NAVIGATION_REJECTED } from '../actions/navigation';
  
  const initialState = {
    fetching: false,
    fetched: false,
    list: [],
    error: ''
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case NAVIGATION_PENDING:
        return {
          ...state,
          fetching: true
        }
      case NAVIGATION_FULFILLED:
        return {
          ...state,
          list: action.payload,
          fetching: false,
          fetched: true
        }
      case NAVIGATION_REJECTED:
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      default:
        return state;
    }
  }
  