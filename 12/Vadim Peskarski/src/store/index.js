import { createStore, compose, applyMiddleware } from 'redux';
import { initialState } from './initialState.js';
import rootReducer from './rootReducers.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

const composedEnhacers = compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__());

export default createStore(
  rootReducer,
  initialState,
  composedEnhacers
);

sagaMiddleware.run(rootSaga);

