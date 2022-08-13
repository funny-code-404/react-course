import  {combineReducers} from "redux";
import {bookingReducer} from "../redux/dataBooking/reduser";
import {hotelsReducer} from "../redux/dataHotels/reduser";
import {popularHotelsReducer} from "../redux/dataPopularHotels/reduser";

export const reducer = combineReducers({
    booking: bookingReducer,
    hotels: hotelsReducer,
    popularHotels: popularHotelsReducer,
})