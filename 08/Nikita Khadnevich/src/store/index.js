import { createStore } from 'redux';

import { initialState } from './initialState';
import reducer from './rootReducer';

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
