import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { initialState } from './initialState';
import reducer from './rootReducer';

import {getDataMiddleware } from '../middlewares/getDataMiddleware'

const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const enhancers = [reduxDevtoolsExtension()];

const middlewares = [getDataMiddleware, thunkMiddleware];

const composedEnhacers = compose(applyMiddleware(...middlewares), ...enhancers);


export default createStore(reducer, initialState, composedEnhacers);
