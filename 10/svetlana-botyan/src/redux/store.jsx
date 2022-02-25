import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './rootReducer';
import { initialState } from './initialState';
import thunkMiddleware from 'redux-thunk';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const middlewares = [thunkMiddleware];
const enhancers = [reduxDevtools()];

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

export const store = createStore(reducer, initialState, composedEnhancers) 