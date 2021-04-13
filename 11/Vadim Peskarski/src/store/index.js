import { createStore, compose, applyMiddleware } from 'redux';
import { initialState } from './initialState.js';
import rootReducer from './rootReducers.js';
import thunk from 'redux-thunk';


// const enhancers = [window.__REDUX_DEVTOOLS_EXTENSION__];
const composedEnhacers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__());

export default createStore(
  rootReducer,
  initialState,
  composedEnhacers
)
