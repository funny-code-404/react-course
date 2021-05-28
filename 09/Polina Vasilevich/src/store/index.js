import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";
import { initialState } from "./initialState";

const devtoolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancers = [devtoolsExtension];

const middlewares = [thunkMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export default createStore(rootReducer, initialState, composedEnhancers);
