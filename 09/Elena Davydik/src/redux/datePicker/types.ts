export const DATE_FROM = "DATE_FROM";
export const DATE_TO = "DATE_TO";
export const DATEPICKER = "DATEPICKER";

export type ActionType = {
  type: typeof DATE_FROM | typeof DATE_TO;
  payload: string;
};

export type datePickerType = {
  datePicker: datePickerStateType;
};

export type dateFromPayloadType = {
  type: typeof DATE_FROM;
  payload: Date | null;
};

export type dateToPayloadType = {
  type: typeof DATE_TO;
  payload: Date | null;
};

export type datePickerStateType = {
  dateFrom: Date | null;
  dateTo: Date | null;
};

export const InitialdatePickerState = {
  dateFrom: null,
  dateTo: null,
};
