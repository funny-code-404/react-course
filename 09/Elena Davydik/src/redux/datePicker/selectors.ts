import { datePickerType } from "./types";

export const dateFromSelector = (state: datePickerType) =>
  state.datePicker.dateFrom;
export const dateToSelector = (state: datePickerType) =>
  state.datePicker.dateTo;
