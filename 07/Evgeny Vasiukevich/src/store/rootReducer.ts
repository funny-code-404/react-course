import { combineReducers } from "redux";
import { hotelsReducer } from "../redux/Hotels/reducer";
import { searchCounterReducer } from "../redux/searchCounter/reducer";

export const reducer = combineReducers({
    searchCounter: searchCounterReducer,
    hotels: hotelsReducer,
})