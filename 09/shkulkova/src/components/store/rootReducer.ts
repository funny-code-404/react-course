import { combineReducers } from "redux";
import { HotelsReducer } from "../redux/availableHotels/reducer";
import { SearchSectionReducer } from "../redux/headerSerchSection/reducer";

export const reducer = combineReducers({
  hotels: HotelsReducer,
  searchSection: SearchSectionReducer,
});
