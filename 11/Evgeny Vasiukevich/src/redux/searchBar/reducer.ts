import { SearchBarTypesActions } from "./actions";
import { TCounterState, TSearchBarActions, TSearchBarState } from "./types";

export const initialSearchBarState = {
    search: '',
    dateRange: {
        dateFrom: null,
        dateTo: null,
    },
    counter: {
        properties: {
            adults: 0,
            children: [],
            rooms: 1
        },
        states: {
            isModalOpen: false,
            isSelectAvailable: false,
            isSelectChange: true,
        }
    }
};

export const searchBarReducer = (
    state: TSearchBarState = initialSearchBarState,
    action: TSearchBarActions
): TSearchBarState => {
    switch (action.type) {
        case SearchBarTypesActions.SEARCH:
            return {
                ...state,
                search: action.payload as string
            };
        case SearchBarTypesActions.DATE_FROM:
            return {
                ...state,
                dateRange: {...state.dateRange, dateFrom: action.payload as Date | null}
            };
        case SearchBarTypesActions.DATE_TO:
            return {
                ...state,
                dateRange: {...state.dateRange, dateTo: action.payload as Date | null}
            };
        case SearchBarTypesActions.ADULTS:
            return {
                ...state,
                counter: {...state.counter, properties: {...state.counter.properties, adults: action.payload as number}}
            };
        case SearchBarTypesActions.CHILDREN:
            return {
                ...state,
                counter: {...state.counter, properties: {...state.counter.properties, children: action.payload as string[]}}
            };
        case SearchBarTypesActions.ROOMS:
            return {
                ...state,
                counter: {...state.counter, properties: {...state.counter.properties, rooms: action.payload as number}}
            };
        case SearchBarTypesActions.ELEMS_STATES:
            return {
                ...state,
                counter: {...state.counter, states: {...state.counter.states, ...action.payload as TCounterState}}
            };
        default:
            return state;
    }
}