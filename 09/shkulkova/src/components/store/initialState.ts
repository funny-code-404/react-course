import { initialHotelsState } from "../redux/availableHotels/reducer";
import { initialSearchSectionState } from "../redux/headerSerchSection/reducer";

export const initialState = {
  hotels: initialHotelsState,
  searchSection: initialSearchSectionState,
};
