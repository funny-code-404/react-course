import { applyMiddleware, compose, createStore } from 'redux';
import { initialState } from './initialState';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSags';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enchancers = [];

if (process.env.NODE_ENV === 'development') {
  const getDevtoolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof getDevtoolsExt === 'function') {
    enchancers.push(getDevtoolsExt());
  }
}

const composeEnchancers = compose(applyMiddleware(...middlewares), ...enchancers);

const store = createStore(rootReducer, initialState, composeEnchancers);

sagaMiddleware.run(rootSaga);

export default store;
