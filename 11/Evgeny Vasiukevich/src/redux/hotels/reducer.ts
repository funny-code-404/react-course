import { THotel } from "../../types/types";
import { HotelsTypesActions } from "./actions";
import { THotelsActions, THotelsState } from "./types";

export const initialHotelsState = {
    popularHotels: {
        hotels: null,
        isLoading: false,
        error: null,
    },
    availableHotels: {
        hotels: null,
        isLoading: false,
        error: null,
    },
    currentHotel: null,
};

export const hotelsReducer = (
    state: THotelsState = initialHotelsState,
    action: THotelsActions
): THotelsState => {
    switch (action.type) {
        case HotelsTypesActions.REQUEST_POPULAR_HOTELS:
            return { 
                ...state, 
                popularHotels: {...state.popularHotels, isLoading: true} };
        case HotelsTypesActions.REQUEST_POPULAR_HOTELS_SUCCEED:
            return { 
                ...state, 
                popularHotels: {...state.popularHotels, hotels: action.payload as THotel[], isLoading: false} };
        case HotelsTypesActions.REQUEST_POPULAR_HOTELS_FAILED:
            return { 
                ...state, 
                popularHotels: {...state.popularHotels, error: action.payload as null | Error, isLoading: false} };
        case HotelsTypesActions.REQUEST_AVAILABLE_HOTELS:
            return { 
                ...state,
                availableHotels: {...state.availableHotels, isLoading: true} };
        case HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_SUCCEED:
            return { 
                ...state, 
                availableHotels: {...state.availableHotels, hotels: action.payload as THotel[], isLoading: false} };
        case HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_FAILED:
            return { 
                ...state, 
                availableHotels: {...state.availableHotels, error: action.payload as null | Error, isLoading: false} };
        case HotelsTypesActions.CURRENT_HOTEL:
            return { 
                ...state, 
                currentHotel: action.payload as THotel };
        default:
            return state;
    }
}