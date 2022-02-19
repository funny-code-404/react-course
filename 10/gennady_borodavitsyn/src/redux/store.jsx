import { createStore, compose, applyMiddleware } from 'redux';
import { commentsReducer, initialState } from '../ducks/comments';
import { getCommentsDataMiddleware } from './middlewares/getCommentsDataMiddleware';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const middlewares = [getCommentsDataMiddleware];
const enhancers = [reduxDevTools()];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export const Store = createStore(
  commentsReducer,
  initialState,
  composedEnhancers
);
