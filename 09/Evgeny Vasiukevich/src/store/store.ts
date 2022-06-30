import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'
import { THotelsState } from "../redux/hotels/types";
import { TSearchBarState } from "../redux/searchBar/types";
import { initialState } from "./initialStore";
import { reducer } from "./rootReducer";

export type TInitialState = {
    searchBar: TSearchBarState,
    hotels: THotelsState
};

const enhancers: any[] = [thunkMiddleware, logger]

const store = createStore(
    reducer,
    initialState as any,
    composeWithDevTools(applyMiddleware(...enhancers))
);

export default store;