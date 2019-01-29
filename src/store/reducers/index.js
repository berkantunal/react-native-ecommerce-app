import { combineReducers } from 'redux';

import navigation from './navigation';
import product from './product';
import category from './category';
import homepage from './homepage';
import filter from './filter';
import cart from './cart';

export default combineReducers({
  homepage,
  category,
  product,
  navigation,
  filter,
  cart
});
