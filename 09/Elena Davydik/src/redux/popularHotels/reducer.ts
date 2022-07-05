import {
  StateType,
  initialHotelsState,
  ActionType,
  REQUEST_HOTELS,
  REQUEST_HOTELS_SUCCEED,
  REQUEST_HOTELS_FAILED,
  CLEAR_DATA,
} from "./types";

export const PopularHotelsReducer = (
  state: StateType = initialHotelsState,
  action: ActionType
) => {
  switch (action.type) {
    case REQUEST_HOTELS:
      return { ...state, isLoading: false };
    case REQUEST_HOTELS_SUCCEED:
      return { ...state, data: action.payload, isLoading: false };
    case REQUEST_HOTELS_FAILED:
      return { ...state, arror: action.payload, isLoading: false };
    case CLEAR_DATA:
      return initialHotelsState;
    default:
      return state;
  }
};
