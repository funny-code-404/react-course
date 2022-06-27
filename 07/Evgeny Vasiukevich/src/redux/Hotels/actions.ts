import { createAction } from "redux-actions";

export enum HotelsTypesActions {
    REQUEST_HOTELS = 'REQUEST_HOTELS',
    REQUEST_ALL_HOTELS_SUCCEED = 'REQUEST_ALL_HOTELS_SUCCEED',
    REQUEST_POPULAR_HOTELS_SUCCEED = 'REQUEST_POPULAR_HOTELS_SUCCEED',
    REQUEST_HOTELS_FAILED = 'REQUEST_HOTELS_FAILED',
    CURRENT_HOTEL = 'CURRENT_HOTEL'
};

export const actionGetHotelsRequested = createAction(HotelsTypesActions.REQUEST_HOTELS);
export const actionGetAllHotels = createAction(HotelsTypesActions.REQUEST_ALL_HOTELS_SUCCEED);
export const actionGetPopularHotels = createAction(HotelsTypesActions.REQUEST_POPULAR_HOTELS_SUCCEED);
export const actionGetHotelsFailed = createAction(HotelsTypesActions.REQUEST_HOTELS_FAILED);
export const actionSetCurrentHotel = createAction(HotelsTypesActions.CURRENT_HOTEL);