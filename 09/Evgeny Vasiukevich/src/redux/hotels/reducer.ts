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
) => {
    switch (action.type) {
        case HotelsTypesActions.REQUEST_POPULAR_HOTELS:
            return { 
                ...state, 
                popularHotels: {...state.popularHotels, isLoading: true} };
        case HotelsTypesActions.REQUEST_POPULAR_HOTELS_SUCCEED:
            return { 
                ...state, 
                popularHotels: {...state.popularHotels, hotels: action.payload, isLoading: false} };
        case HotelsTypesActions.REQUEST_POPULAR_HOTELS_FAILED:
            return { 
                ...state, 
                popularHotels: {...state.popularHotels, error: action.payload, isLoading: false} };
        case HotelsTypesActions.REQUEST_AVAILABLE_HOTELS:
            return { 
                ...state,
                availableHotels: {...state.availableHotels, isLoading: true} };
        case HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_SUCCEED:
            return { 
                ...state, 
                availableHotels: {...state.availableHotels, hotels: action.payload, isLoading: false} };
        case HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_FAILED:
            return { 
                ...state, 
                availableHotels: {...state.availableHotels, error: action.payload, isLoading: false} };
        case HotelsTypesActions.CURRENT_HOTEL:
            return { 
                ...state, 
                currentHotel: action.payload };
        default:
            return state;
    }
}