import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { initialState } from './initialState';
import reducer from './rootReducer';

const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; 

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    enhancers.push(reduxDevtoolsExtension());
};

const middlewares = [thunkMiddleware];

const composedEnhacers = compose(
    applyMiddleware(...middlewares),
    ...enhancers,
);

export default createStore(
    reducer,
    initialState,
    composedEnhacers
);