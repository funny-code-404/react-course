import { TCounterProperties, TElemsState } from "../../types/types"
import { elemsStateTypeAction, searchCounterTypesActions } from "./actions"

type TPropertiesActions = {
    type: searchCounterTypesActions,
    payload: TCounterProperties,
};

type TElemsStateAction = {
    type: elemsStateTypeAction,
    payload: TElemsState,
};

export type TState = {
    properties: TPropertiesActions,
    states: TElemsStateAction
};

export const initialSearchCounterState = {
    properties: {
        type: searchCounterTypesActions.ADULTS,
        payload: {
            adults: 0,
            children: 0,
            agesChildren: [],
            rooms: 1
        },
    },
    states: {
        type: elemsStateTypeAction.ELEMS_STATES,
        payload: {
            isModalOpen: false,
            isSelectAvailable: false,
            isSelectChange: true,
        },
    }
};

export const searchCounterReducer = (
    state: TState = initialSearchCounterState,
    action: TPropertiesActions | TElemsStateAction
) => {
    switch (action.type) {
        case searchCounterTypesActions.ADULTS:
            return {
                ...state,
                properties: {...state.properties, payload: action.payload}
            }
        case searchCounterTypesActions.CHILDREN:
            return {
                ...state,
                properties: {...state.properties, payload: action.payload}
            }
        case searchCounterTypesActions.ROOMS:
            return {
                ...state,
                properties: {...state.properties, payload: action.payload}
            }
        case elemsStateTypeAction.ELEMS_STATES:
            return {
                ...state,
                states:  {...state.states, payload: action.payload}
            }
        default:
            return state;
    }
}