import { AvailableHotelsStateType } from "./types";

export const dataSelector = (state: AvailableHotelsStateType) =>
  state.availableHotels.requests.data;
export const errorSelector = (state: AvailableHotelsStateType) =>
  state.availableHotels.requests.error;
export const isLoadingSelector = (state: AvailableHotelsStateType) =>
  state.availableHotels.requests.isLoading;
export const inputValueSelector = (state: AvailableHotelsStateType) =>
  state.availableHotels.inputValue;
export const urlSelector = (state: AvailableHotelsStateType) =>
  state.availableHotels.url;
export const isClickedSelector = (state: AvailableHotelsStateType) =>
  state.availableHotels.isClicked;
