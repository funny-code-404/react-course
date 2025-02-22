import {createStore} from "redux";
import {initialState} from "./initialState"
import {reducer} from "./rootReducer";

export const store = createStore(reducer, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__());