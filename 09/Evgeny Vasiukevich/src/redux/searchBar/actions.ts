import { createAction } from "redux-actions";

export enum SearchBarTypesActions {
    SEARCH = 'SEARCH',
    DATE_FROM = 'DATE_FROM',
    DATE_TO = 'DATE_TO',
    ADULTS = 'ADULTS',
    CHILDREN = 'CHILDREN',
    ROOMS = 'ROOMS',
    ELEMS_STATES = 'ELEMS_STATES'
};
export const actionSetSearch = createAction(SearchBarTypesActions.SEARCH);
export const actionSetDateFrom = createAction(SearchBarTypesActions.DATE_FROM);
export const actionSetDateTo = createAction(SearchBarTypesActions.DATE_TO);
export const actionChangeAdults = createAction(SearchBarTypesActions.ADULTS);
export const actionChangeChildren = createAction(SearchBarTypesActions.CHILDREN);
export const actionChangeRooms = createAction(SearchBarTypesActions.ROOMS);
export const actionChangeCounterStates = createAction(SearchBarTypesActions.ELEMS_STATES);