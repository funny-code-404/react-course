import { createStore } from "redux";
import { THotelsState, TSearchCounterState } from "../types/types";
import { initialState } from "./initialStore";
import { reducer } from "./rootReducer";

export type initalState = {
    searchCounter: TSearchCounterState,
    hotels: THotelsState,
}

const store = createStore(
    reducer,
    initialState as any,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;