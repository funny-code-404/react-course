import { createStore } from 'redux';
import { reducer } from './rootReducer';
import { initialState } from './initialState';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(reducer, initialState, reduxDevtools());
