import axios from 'axios';

import HomePage from "../../clients/homepage";

export const HOMEPAGE_PENDING   = "HOMEPAGE_PENDING";
export const HOMEPAGE_FULFILLED = "HOMEPAGE_FULFILLED";
export const HOMEPAGE_REJECTED  = "HOMEPAGE_REJECTED";

export function get() {
  return dispatch => {
    dispatch({
      type: HOMEPAGE_FULFILLED,
      payload: HomePage // axios.get(`ticker/`).then(result => result.data).then(data => data.data)
    });
  }
}
