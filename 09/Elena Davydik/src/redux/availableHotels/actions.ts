import {
  REQUEST_AVAILABLE_HOTELS,
  REQUEST_AVAILABLE_HOTELS_SUCCEED,
  REQUEST_AVAILABLE_HOTELS_FAILED,
  CLEAR_AVAILABLE_DATA,
  INPUT_VALUE,
  AvailableHotelsPayloadType,
  ActionType,
  URL,
  IS_CLICKED,
} from "./types";

export const actionIsClicked = (click: boolean): ActionType => ({
  type: IS_CLICKED,
  payload: click,
});

export const actionUrl = (url: string): ActionType => ({
  type: URL,
  payload: url,
});

export const actionInputValue = (value: string): ActionType => ({
  type: INPUT_VALUE,
  payload: value,
});

export const actionGetAvailableHotelsRequested = (): ActionType => ({
  type: REQUEST_AVAILABLE_HOTELS,
});

export const actionClearAvailableData = (): ActionType => ({
  type: CLEAR_AVAILABLE_DATA,
});

export const actionGetAvailableHotelsSucceed = (
  data: AvailableHotelsPayloadType
): ActionType => ({
  type: REQUEST_AVAILABLE_HOTELS_SUCCEED,
  payload: data,
});

export const actionGetAvailableHotelsFailed = (error: Error): ActionType => ({
  type: REQUEST_AVAILABLE_HOTELS_FAILED,
  payload: error,
});
