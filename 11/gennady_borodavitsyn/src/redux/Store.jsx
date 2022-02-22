import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import { rootReducer } from '../redux/rootReducer';
import { initialState } from '../redux/initialState';
import { rootSaga } from '../redux/rootSaga';

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const enhancers = [devToolsExtension()];

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export const Store = createStore(
  combineReducers({ ...rootReducer }),
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);
