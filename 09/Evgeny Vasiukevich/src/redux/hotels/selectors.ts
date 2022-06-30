import { TInitialState } from "../../store/store";

export const popularHotelsLoadingSelector = (state: TInitialState) => state.hotels.popularHotels.isLoading;
export const popularHotelsSucceedSelector = (state: TInitialState) => state.hotels.popularHotels.hotels;
export const popularHotelsFailedSelector = (state: TInitialState) => state.hotels.popularHotels.error;
export const availableHotelsLoadingSelector = (state: TInitialState) => state.hotels.availableHotels.isLoading;
export const availableHotelsSucceedSelector = (state: TInitialState) => state.hotels.availableHotels.hotels;
export const availableHotelsFailedSelector = (state: TInitialState) => state.hotels.availableHotels.error;
export const currentHotelSelector = (state: TInitialState) => state.hotels.currentHotel;