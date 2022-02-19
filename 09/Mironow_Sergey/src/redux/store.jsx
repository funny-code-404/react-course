import { createStore } from 'redux';
import { initialState, userReducer } from '../ducks/users';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__

export const store = createStore(userReducer, initialState, reduxDevtools())