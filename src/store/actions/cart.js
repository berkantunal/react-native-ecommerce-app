export const CART_ADD = "CART_ADD";
export const CART_DELETE = "CART_DELETE";

export function addProduct(product = {}) {
  if (!product) {
    return false;
  }

  return dispatch => {
    dispatch({
      type: CART_ADD,
      payload: product
    })
  }
}

export function deleteProduct(product = {}) {
  console.log(product);

  if (!product) {
    return false;
  }

  return dispatch => {
    dispatch({
      type: CART_DELETE,
      payload: product
    })
  }
}
