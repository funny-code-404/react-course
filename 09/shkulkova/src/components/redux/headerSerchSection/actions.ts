import { createAction } from "redux-actions";


export const SEARCH = "SEARCH";
export const ADULTS = "ADULTS";
export const CHILDREN = "CHILDREN";
export const ROOMS = "ROOMS";
export const DATE_FROM = "DATE_FROM";
export const DATE_TO = "DATE_TO";

export const actionSetSearch = createAction(SEARCH);
export const actionChangeAdults = createAction(ADULTS);
export const actionChangeChildren = createAction(CHILDREN);
export const actionChangeRooms = createAction(ROOMS);
export const actionSetDateFrom = createAction(DATE_FROM);
export const actionSetDateTo = createAction(DATE_TO);