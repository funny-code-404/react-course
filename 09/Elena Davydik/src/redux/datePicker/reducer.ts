import {
  ActionType,
  DATE_FROM,
  DATE_TO,
  datePickerStateType,
  InitialdatePickerState,
} from "./types";

export const DatePickerReducer = (
  state: datePickerStateType = InitialdatePickerState,
  action: ActionType
) => {
  switch (action.type) {
    case DATE_FROM:
      return {
        ...state,
        dateFrom: action.payload,
      };
    case DATE_TO:
      return {
        ...state,
        dateTo: action.payload,
      };
    default:
      return state;
  }
};
