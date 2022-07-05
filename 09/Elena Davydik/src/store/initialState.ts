import { initialFilterState } from "../redux/searchFormFilter/types";
import { initialHotelsState } from "../redux/popularHotels/types";
import { initialAvailableHotelsState } from "../redux/availableHotels/types";
import { InitialdatePickerState } from "../redux/datePicker/types";

export const initialState = {
  filter: initialFilterState,
  popularHotels: initialHotelsState,
  availableHotels: initialAvailableHotelsState,
  datePicker: InitialdatePickerState,
};
