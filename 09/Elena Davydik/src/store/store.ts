import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { initialState } from "./initialState";
import { reducer } from "./rootReducer";

const middlewares: any[] = [thunkMiddleware];

const enhancers = [
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(reducer, initialState as any, composedEnhancers);

export default store;
