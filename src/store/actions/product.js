// import axios from 'axios';

import Product from "../../clients/product";

export const PRODUCT_PENDING   = "PRODUCT_PENDING";
export const PRODUCT_FULFILLED = "PRODUCT_FULFILLED";
export const PRODUCT_REJECTED  = "PRODUCT_REJECTED";

export function getProductsWithCategoryId(categoryId = 0) {
  return dispatch => {
    dispatch({
      type: PRODUCT_FULFILLED,
      payload: { categoryId, data: Product } //axios.get(`getProductListWithCategoryId/${categoryId}`).then(result => result.data).then(data => { return data.data })
    });
  }
}
