import { combineReducers } from "redux";
import { FilterReducer } from "../redux/searchFormFilter/reducer";
import { PopularHotelsReducer } from "../redux/popularHotels/reducer";
import { AvailableHotelsReducer } from "../redux/availableHotels/reducer";
import { DatePickerReducer } from "../redux/datePicker/reducer";

export const reducer = combineReducers({
  filter: FilterReducer,
  popularHotels: PopularHotelsReducer,
  availableHotels: AvailableHotelsReducer,
  datePicker: DatePickerReducer,
});
