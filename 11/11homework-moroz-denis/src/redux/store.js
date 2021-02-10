import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import initialState from './initialState';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
};

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const store = createStore(
    combineReducers(rootReducer),
    initialState,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;