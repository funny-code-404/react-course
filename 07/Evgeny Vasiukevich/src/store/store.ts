import { createStore } from "redux";
import { TState } from "../redux/searchCounter/reducer";
import { initialState } from "./initialStore";
import { reducer } from "./rootReducer";

export type initalState = {
    searchCounter: TState,
}

const store = createStore(
    reducer,
    initialState as any,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;