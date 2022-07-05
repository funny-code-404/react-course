import { HotelsStateType } from "./types";

export const dataSelector = (state: HotelsStateType) =>
  state.popularHotels.data;
export const errorSelector = (state: HotelsStateType) =>
  state.popularHotels.error;
export const isLoadingSelector = (state: HotelsStateType) =>
  state.popularHotels.isLoading;
