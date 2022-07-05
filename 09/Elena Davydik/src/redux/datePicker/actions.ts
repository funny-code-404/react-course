import {
  DATE_FROM,
  DATE_TO,
  dateFromPayloadType,
  dateToPayloadType,
} from "./types";

export const actionDateFromPicker = (
  dateFrom: Date | null
): dateFromPayloadType => ({
  type: DATE_FROM,
  payload: dateFrom,
});

export const actionDateToPicker = (dateTo: Date | null): dateToPayloadType => ({
  type: DATE_TO,
  payload: dateTo,
});
