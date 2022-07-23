import { initialHotelsState } from "../redux/hotels/reducer";
import { initialSearchBarState } from "../redux/searchBar/reducer";
import { initialThemeState } from "../redux/theme/reducer";

export const initialState = {
    searchBar: initialSearchBarState,
    hotels: initialHotelsState,
    theme: initialThemeState,
};