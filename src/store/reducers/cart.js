import {
  CART_ADD,
  CART_DELETE
} from '../actions/cart';

const initialState = {
  cartProducts: [],
  error: ''
};

const addProductToState = (product, state = initialState) => {

  let exist = false;

  state.cartProducts.map((cartProduct, i) => {
    if (cartProduct.id == product.id) {
      state.cartProducts[i].quantity++;
      exist = true;
    }
  })

  if (!exist) {
    product.quantity = 1;

    state.cartProducts.push(product)
  }

  return state
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CART_DELETE:

      const product = action.payload
      
      state.product.map(() => {
        //product.id
      })

      return {
        ...state,
      }
  }
  
  return state;
}
