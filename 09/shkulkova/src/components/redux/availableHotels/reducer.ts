import {
  REQUEST_AVAILABLE_HOTELS,
  REQUEST_AVAILABLE_HOTELS_SUCCEED,
  REQUEST_AVAILABLE_HOTELS_FAILED,
  CERTAIN_HOTEL,
  HotelsPayloadType,
} from "./actions";

export type StateHotelsType = {
  hotels: HotelsPayloadType | null;
  error: Error | null;
  loading: boolean;
};

type ActionType = {
  type: string;
  payload: HotelsPayloadType | Error;
};


export const initialHotelsState = {
    hotels:  null,
    loading: false,
    error: null,
  
};

export const HotelsReducer = (
  state: StateHotelsType = initialHotelsState,
  action: ActionType
) => {
  switch (action.type) {
    case REQUEST_AVAILABLE_HOTELS:
      return { ...state, loading: false };
    case REQUEST_AVAILABLE_HOTELS_SUCCEED:
      return { ...state, hotels: action.payload, loading: false };
    case REQUEST_AVAILABLE_HOTELS_FAILED:
      return { ...state, error: action.payload, loading: false };
    case CERTAIN_HOTEL:
      return initialHotelsState;
    default:
      return state;
  }
};
