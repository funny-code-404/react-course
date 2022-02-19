import { createStore } from 'redux';
import { userReducer } from '../ducks/users';
import { initialState } from '../ducks/users';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(userReducer, initialState, reduxDevTools());
