import {initialBookingState} from "../redux/dataBooking/reduser";
import {initialHotelsState} from "../redux/dataHotels/reduser";
import {initialPopularHotelsState} from "../redux/dataPopularHotels/reduser";

export const initialState = {
    booking: initialBookingState,
    hotels: initialHotelsState,
    popularHotels: initialPopularHotelsState,
}