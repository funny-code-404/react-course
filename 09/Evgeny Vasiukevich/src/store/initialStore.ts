import { initialHotelsState } from "../redux/hotels/reducer";
import { initialSearchBarState } from "../redux/searchBar/reducer";

export const initialState = {
    searchBar: initialSearchBarState,
    hotels: initialHotelsState,
};