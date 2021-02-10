import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSagas from './rootSagas'

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
};
export const middlewares = [
    sagaMiddleware
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

sagaMiddleware.run(rootSagas)