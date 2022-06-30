import { TAdults, TChildren, TRooms } from "../../types/types";
import { SearchBarTypesActions } from "./actions";

// Types for SearchCounter store
export type TDate = Date | null;

export type TSearchProperties = TAdults & TChildren & TRooms;
export type TSearchProperty = TAdults | TChildren | TRooms;
export type TDateRange = {
    dateFrom: TDate,
    dateTo: TDate,
};

export type TCounterState = {
    isModalOpen: boolean,
    isSelectAvailable: boolean,
    isSelectChange: boolean,
};

export type TSearchBarState = {
    search: string,
    dateRange: TDateRange,
    counter: {
        properties: TSearchProperties,
        states: TCounterState,
    },
};

export type TSearchBarActions = {
    type: SearchBarTypesActions,
    payload: TCounterState | string | TDate | TSearchProperty,
};