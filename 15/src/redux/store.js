import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const enhancers = [];
if(process.env.NODE_ENV === 'development') {
    enhancers.push(reduxDevtools());
}

const sagaMiddleware = createSagaMiddleware();

export const middlewares = [
    applyMiddleware(
        sagaMiddleware
    )
];

const composedEnhancers = compose(
    ...middlewares,
    ...enhancers
);

export const store = createStore(
    rootReducer,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);