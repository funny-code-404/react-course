import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import initialState from './initialState';
import rootReducer from './rootReducer';

import { getDataMiddleware } from './middlewares';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

const middlewares = [
    getDataMiddleware,
    thunkMiddleware,
];

const composedEnhacers = compose(
    applyMiddleware(...middlewares),
    ...enhancers,
);

export default createStore(
    combineReducers({ ...rootReducer }),
    initialState,
    composedEnhacers,
);
