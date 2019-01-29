import axios from 'axios';

import Navigation from "../../clients/navigation";

export const NAVIGATION_PENDING   = "NAVIGATION_PENDING";
export const NAVIGATION_FULFILLED = "NAVIGATION_FULFILLED";
export const NAVIGATION_REJECTED  = "NAVIGATION_REJECTED";

export function getNavigation() {
  return dispatch => {
    dispatch({
      type: NAVIGATION_FULFILLED,
      payload: Navigation // axios.get(`ticker/`).then(result => result.data).then(data => data.data)
    });
  }
}
