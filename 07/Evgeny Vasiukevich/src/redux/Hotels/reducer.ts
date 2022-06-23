import { THotelsActions, THotelsState } from "../../types/types";
import { HotelsTypesActions } from "./actions";

export const initialHotelsState = {
    allHotels: null,
    popularHotels: null,
    isLoading: false,
    error: null,
    currentHotel: null,
};

export const hotelsReducer = (
    state: THotelsState = initialHotelsState,
    action: THotelsActions
) => {
    switch (action.type) {
        case HotelsTypesActions.REQUEST_HOTELS:
            return { ...state, isLoading: true };
        case HotelsTypesActions.REQUEST_ALL_HOTELS_SUCCEED:
            return { ...state, allHotels: action.payload, isLoading: false };
        case HotelsTypesActions.REQUEST_POPULAR_HOTELS_SUCCEED:
            return { ...state, popularHotels: action.payload, isLoading: false };
        case HotelsTypesActions.REQUEST_HOTELS_FAILED:
            return { ...state, error: action.payload, isLoading: false };
        case HotelsTypesActions.CURRENT_HOTEL:
            return { ...state, currentHotel: action.payload };
        default:
            return state;
    }
}