import { createAction } from "redux-actions";

export enum searchCounterTypesActions {
    ADULTS = 'ADULTS',
    CHILDREN = 'CHILDREN',
    ROOMS = 'ROOMS',
    ELEMS_STATES = 'ELEMS_STATES'
};

export const actionChangeAdults = createAction(searchCounterTypesActions.ADULTS);
export const actionChangeChildren = createAction(searchCounterTypesActions.CHILDREN);
export const actionChangeRooms = createAction(searchCounterTypesActions.ROOMS);
export const actionChangeCounterStates = createAction(searchCounterTypesActions.ELEMS_STATES);