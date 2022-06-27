import { initalState } from "../../store/store";

export const hotelsLoadingSelector = (state: initalState) => state.hotels.isLoading;
export const hotelsAllHotelsSelector = (state: initalState) => state.hotels.allHotels;
export const hotelsPopularHotelsSelector = (state: initalState) => state.hotels.popularHotels;
export const hotelsFailedSelector = (state: initalState) => state.hotels.error;
export const hotelsCurrentHottels = (state: initalState) => state.hotels.currentHotel;