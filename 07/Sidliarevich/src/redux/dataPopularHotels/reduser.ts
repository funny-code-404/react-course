import {
    requestDataPopularHotels,
    requestDataSucceedPopularHotels,
    requestDataFailedPopularHotels
} from "./actions";
import {Data} from "../../components/homes/homes";

type ActionType = {
    type: string,
    payload?: any,
}

export type PopularHotelsStateType = {
        data: Data[] | null;
        error: Error | null,
        isLoading: boolean,
}

export const initialPopularHotelsState: PopularHotelsStateType = {
        data: null,
        error: null,
        isLoading: false,
};

export const popularHotelsReducer = (state = initialPopularHotelsState, action: ActionType) => {
    switch (action.type) {
        case  requestDataPopularHotels:
            return {
                ...state,
                    data: state.data,
                    error: state.error,
                    isLoading: true,
            };
        case  requestDataSucceedPopularHotels:
            return {
                ...state,
                    data: action.payload,
                    error: state.error,
                    isLoading: false,
            };
        case requestDataFailedPopularHotels:
            return {
                ...state,
                    data: state.data,
                    error: action.payload,
                    isLoading: false,
            };
        default:
            return state;
    }
}