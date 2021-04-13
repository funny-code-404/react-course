import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { initialState } from "./initialState";
import reducer from "./rootReducer";

import { getDataMiddleware } from "../middlewares/getDataMiddleware";

const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

console.log(process.env.NODE_ENV);

const enhancers = [];

if (process.env.NODE_ENV === "development") {
  enhancers.push(reduxDevtoolsExtension());
}

const middlewares = [getDataMiddleware, thunkMiddleware];

const composedEnhacers = compose(applyMiddleware(...middlewares), ...enhancers);

export default createStore(reducer, initialState, composedEnhacers);
