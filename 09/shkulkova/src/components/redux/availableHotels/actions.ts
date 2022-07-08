import { createAction } from "redux-actions";


export const REQUEST_AVAILABLE_HOTELS = "REQUEST_AVAILABLE_HOTELS";
export const REQUEST_AVAILABLE_HOTELS_SUCCEED = "REQUEST_AVAILABLE_HOTELS_SUCCEED";
export const REQUEST_AVAILABLE_HOTELS_FAILED = "REQUEST_AVAILABLE_HOTELS_FAILED";
export const CERTAIN_HOTEL = "CERTAIN_HOTEL";

export type HotelType = {
  id: number | string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
};
export const actionGetHotelsRequested = () => ({
  type: REQUEST_AVAILABLE_HOTELS
});
export const certainHotel = () => ({
  type: CERTAIN_HOTEL
});
export type HotelsPayloadType = HotelType[];
export const actionGetHotelsSucceed = (data: HotelsPayloadType) => ({
  type: REQUEST_AVAILABLE_HOTELS_SUCCEED, 
  payload: data
});
export type HotelsPayloadError = Error;
export const actionGetHotelsFailed = (error: HotelsPayloadError) => ({
  type: REQUEST_AVAILABLE_HOTELS_FAILED, 
  payload: error
});

// export const actionGetHotelsRequested = createAction(REQUEST_AVAILABLE_HOTELS);
// export const actionGetHotelsSucceed = createAction(REQUEST_AVAILABLE_HOTELS_SUCCEED);
// export const HotelsPayloadError = createAction(REQUEST_AVAILABLE_HOTELS_FAILED);
// export const certainHotel = createAction(CERTAIN_HOTEL);