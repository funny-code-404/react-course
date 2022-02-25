import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { rootReducer } from "./rootReducer";
import { initialState } from "./initialState";
import { rootSaga } from './rootSaga';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancers = [devtoolsExtension()];

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const store = createStore(
    combineReducers({rootReducer}),
    initialState,
    composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;

