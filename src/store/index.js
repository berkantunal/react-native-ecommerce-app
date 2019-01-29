import rootReducers from './reducers/';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';

const store = createStore(
  rootReducers,
  applyMiddleware(reduxPromise(), thunk, logger)
);

export default store;
