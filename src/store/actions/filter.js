// import axios from 'axios';

import Filters from "../../clients/filter";

export const SET_FILTER       = "SET_FILTER";
export const FILTER_PENDING   = "FILTER_PENDING";
export const FILTER_FULFILLED = "FILTER_FULFILLED";
export const FILTER_REJECTED  = "FILTER_REJECTED";

export function getCategoryFilters(id) {
  return dispatch => {
    dispatch({
      type: FILTER_FULFILLED,
      payload: { Filters, id } //axios.get(`member/login`).then(result => result.data).then(data => data.data)
    });
  }
}

export function setFilters(filters) {
  return dispatch => {
    dispatch({
      type: SET_FILTER,
      payload: filters
    });
  }
}