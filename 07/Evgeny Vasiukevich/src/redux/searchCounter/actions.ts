import { TCounterProperties, TElemsState } from "../../types/types";

export enum searchCounterTypesActions {
    ADULTS = 'ADULTS',
    CHILDREN = 'CHILDREN',
    ROOMS = 'ROOMS'
};

export enum elemsStateTypeAction { ELEMS_STATES = 'ELEMS_STATES' };

type TAction = {
    type: searchCounterTypesActions,
    payload: TCounterProperties,
};

type TFuncAction = {(
    type: searchCounterTypesActions,
    properties: TCounterProperties,
    ): TAction
};

type TElemsStateAction = {
    type: elemsStateTypeAction,
    payload: TElemsState,
};

export const changePropertiesAction = (
    type: searchCounterTypesActions,
    properties: TCounterProperties
    ): TAction => ({
    type: type,
    payload: properties
});

export const changeElemsStateAction = (state: TElemsState): TElemsStateAction => ({
    type: elemsStateTypeAction.ELEMS_STATES,
    payload: state
});