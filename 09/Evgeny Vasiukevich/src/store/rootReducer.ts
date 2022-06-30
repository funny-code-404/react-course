import { combineReducers } from "redux";
import { hotelsReducer } from "../redux/hotels/reducer";
import { searchBarReducer } from "../redux/searchBar/reducer";

export const reducer = combineReducers({
    searchBar: searchBarReducer,
    hotels: hotelsReducer,
})