import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { getDataMiddlewares } from "./middlewares";
import rootReducer from "./rootReducer";
import initialState from "./initialState";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const enhancers =[];
const middlewares = [
	getDataMiddlewares,
	sagaMiddleware
];

if(process.env.NODE_ENV === 'development'){
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if(typeof devToolsExtension === 'function'){
		enhancers.push(devToolsExtension());
	}
}

const composedEnhacers = compose(
	applyMiddleware(...middlewares),
	...enhancers
);

const store = createStore(
	combineReducers(rootReducer),
	initialState,
	composedEnhacers,
)

sagaMiddleware.run(rootSaga);

export default store;