// import axios from 'axios';

import Category from "../../clients/category";

export const CATEGORY_PENDING   = "CATEGORY_PENDING";
export const CATEGORY_FULFILLED = "CATEGORY_FULFILLED";
export const CATEGORY_REJECTED  = "CATEGORY_REJECTED";

export function getCategoryList() {
  return dispatch => {
    dispatch({
      type: CATEGORY_FULFILLED,
      payload: Category //axios.get(`member/login`).then(result => result.data).then(data => data.data)
    })
  }
}
