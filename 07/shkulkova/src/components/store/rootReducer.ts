import { combineReducers } from "redux";
import { FilterReducer } from "../redux/headerFormParams/reducer";

export const reducer = combineReducers({
  filter: FilterReducer,
});
