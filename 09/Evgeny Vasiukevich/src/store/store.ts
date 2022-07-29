import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import { initialState } from "./initialStore";
import { reducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { TEnhancers } from "./types";

const sagaMiddleware = createSagaMiddleware();
const enhancers: TEnhancers = [sagaMiddleware, logger];

const store = createStore(
    reducer,
    initialState as any,
    composeWithDevTools(applyMiddleware(...enhancers))
);

sagaMiddleware.run(rootSaga);

export default store;