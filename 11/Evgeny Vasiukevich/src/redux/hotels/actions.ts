import { createAction } from "redux-actions";

export enum HotelsTypesActions {
    REQUEST_POPULAR_HOTELS = 'REQUEST_POPULAR_HOTELS',
    REQUEST_POPULAR_HOTELS_SUCCEED = 'REQUEST_POPULAR_HOTELS_SUCCEED',
    REQUEST_POPULAR_HOTELS_FAILED = 'REQUEST_POPULAR_HOTELS_FAILED',
    REQUEST_AVAILABLE_HOTELS = 'REQUEST_AVAILABLE_HOTELS',
    REQUEST_AVAILABLE_HOTELS_SUCCEED = 'REQUEST_AVAILABLE_HOTELS_SUCCEED',
    REQUEST_AVAILABLE_HOTELS_FAILED = 'REQUEST_HOTELS_FAILED',
    CURRENT_HOTEL = 'CURRENT_HOTEL'
};

export const actionGetPopularHotelsRequested = createAction(HotelsTypesActions.REQUEST_POPULAR_HOTELS);
export const actionGetPopularHotelsSucceed = createAction(HotelsTypesActions.REQUEST_POPULAR_HOTELS_SUCCEED);
export const actionGetPopularHotelsFailed = createAction(HotelsTypesActions.REQUEST_POPULAR_HOTELS_FAILED);
export const actionGetAvailableHotelsRequested = createAction(HotelsTypesActions.REQUEST_AVAILABLE_HOTELS);
export const actionGetAvailableHotelsSucceed = createAction(HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_SUCCEED);
export const actionGetAvailableHotelsFailed = createAction(HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_FAILED);
export const actionSetCurrentHotel = createAction(HotelsTypesActions.CURRENT_HOTEL);