import {
    PRODUCT_PENDING,
    PRODUCT_FULFILLED,
    PRODUCT_REJECTED } from '../actions/product';
  
  const initialState = {
    fetching: false,
    fetched: false,
    list: [],
    error: ''
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_PENDING:
        return {
          ...state,
          fetching: true
        }
      case PRODUCT_FULFILLED:

        const { categoryId, data } = action.payload;

        let list = {
          ...state.list
        }

        list[categoryId] = data;

        return {
          ...state,
          list: list,
          fetching: false,
          fetched: true
        }
      case PRODUCT_REJECTED:
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
    }
  
    return state;
  }
  