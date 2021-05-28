import { createStore, applyMiddleware, compose } from 'redux'
import {rootReducer} from "./rootReducer"
import {initialState} from "./initialState"
import thunkMiddleware from "redux-thunk";

//import {getDataMiddleware} from "../store/middlewares"

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [thunkMiddleware];
const enhancers = [devtoolsExtension];

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);
export default store;