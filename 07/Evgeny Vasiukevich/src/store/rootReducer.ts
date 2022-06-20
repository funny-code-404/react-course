import { combineReducers } from "redux";
import { searchCounterReducer } from "../redux/searchCounter/reducer";

export const reducer = combineReducers({
    searchCounter: searchCounterReducer,
})