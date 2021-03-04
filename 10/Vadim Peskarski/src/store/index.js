import { createStore } from 'redux';
import { initialState } from './initialState.js';
import rootReducer from './rootReducers.js';

export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
