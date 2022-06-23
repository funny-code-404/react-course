import { TCounterProperties, TElemsState, TSearchCounterState } from "../../types/types";
import { searchCounterTypesActions } from "./actions";

type TActions = {
    type: searchCounterTypesActions,
    payload: TCounterProperties | TElemsState,
};

export const initialSearchCounterState = {
    properties: {
        adults: 0,
        children: 0,
        agesChildren: [],
        rooms: 1
    },
    states: {
        isModalOpen: false,
        isSelectAvailable: false,
        isSelectChange: true,
    }
};

export const searchCounterReducer = (
    state: TSearchCounterState = initialSearchCounterState,
    action: TActions
) => {
    switch (action.type) {
        case searchCounterTypesActions.ADULTS:
            return {
                ...state,
                properties: {...state.properties, ...action.payload}
            }
        case searchCounterTypesActions.CHILDREN:
            return {
                ...state,
                properties: {...state.properties, ...action.payload}
            }
        case searchCounterTypesActions.ROOMS:
            return {
                ...state,
                properties: {...state.properties, ...action.payload}
            }
        case searchCounterTypesActions.ELEMS_STATES:
            return {
                ...state,
                states:  {...state.states, ...action.payload}
            }
        default:
            return state;
    }
}