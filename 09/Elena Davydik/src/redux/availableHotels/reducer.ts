import {
  StateType,
  initialAvailableHotelsState,
  ActionType,
  REQUEST_AVAILABLE_HOTELS,
  REQUEST_AVAILABLE_HOTELS_SUCCEED,
  REQUEST_AVAILABLE_HOTELS_FAILED,
  INPUT_VALUE,
  CLEAR_AVAILABLE_DATA,
  URL,
  IS_CLICKED,
} from "./types";

export const AvailableHotelsReducer = (
  state: StateType = initialAvailableHotelsState,
  action: ActionType
) => {
  switch (action.type) {
    case REQUEST_AVAILABLE_HOTELS:
      return {
        ...state,
        requests: {
          data: state.requests.data,
          error: state.requests.error,
          isLoading: true,
        },
      };
    case REQUEST_AVAILABLE_HOTELS_SUCCEED:
      return {
        ...state,
        requests: {
          data: action.payload,
          error: state.requests.error,
          isLoading: false,
        },
      };
    case REQUEST_AVAILABLE_HOTELS_FAILED:
      return {
        ...state,
        requests: {
          data: state.requests.data,
          error: action.payload,
          isLoading: false,
        },
      };
    case INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case URL:
      return { ...state, url: action.payload };
    case IS_CLICKED:
      return { ...state, isClicked: action.payload };
    case CLEAR_AVAILABLE_DATA:
      return initialAvailableHotelsState;
    default:
      return state;
  }
};
