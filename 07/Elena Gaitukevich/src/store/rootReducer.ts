import { combineReducers } from "redux";
import { filterReducer } from "../redux/searchFormFilter/reducer";

export const reducer = combineReducers({
  filter: filterReducer,
});
