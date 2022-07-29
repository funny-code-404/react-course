import { THotel } from "../../types/types";
import { HotelsTypesActions } from "./actions";

export type TResponse = { data: THotel[] };

// Types for hotels store
export type THotelsActions = {
    type: HotelsTypesActions,
    payload: THotel[],
};

export type THotelsState = {
    popularHotels: {
        hotels: THotel[] | null,
        isLoading: boolean,
        error: null | Error,
    },
    availableHotels: {
        hotels: THotel[] | null,
        isLoading: boolean,
        error: null | Error,
    },
    currentHotel: THotel | null,
}