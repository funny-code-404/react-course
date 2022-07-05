import { THotel } from "../popularHotels/types";

export const REQUEST_AVAILABLE_HOTELS = "REQUEST_AVAILABLE_HOTELS";
export const REQUEST_AVAILABLE_HOTELS_SUCCEED =
  "REQUEST_AVAILABLE_HOTELS_SUCCEED";
export const REQUEST_AVAILABLE_HOTELS_FAILED =
  "REQUEST_AVAILABLE_HOTELS_FAILED";
export const CLEAR_AVAILABLE_DATA = "CLEAR_AVAILABLE_DATA";
export const INPUT_VALUE = "INPUT_VALUE";
export const URL = "URL";
export const IS_CLICKED = "IS_CLICKED";

export type isClickedType = boolean;
export type InputValueType = string;
export type UrlType = string;

export type ActionType = {
  type:
    | typeof REQUEST_AVAILABLE_HOTELS
    | typeof REQUEST_AVAILABLE_HOTELS_SUCCEED
    | typeof REQUEST_AVAILABLE_HOTELS_FAILED
    | typeof CLEAR_AVAILABLE_DATA
    | typeof INPUT_VALUE
    | typeof URL
    | typeof IS_CLICKED;
  payload?: AvailableHotelsPayloadType | Error | InputValueType | boolean;
};

export type AvailableHotelsPayloadType = THotel[];

export type StateType = {
  url: string;
  inputValue: string;
  isClicked: boolean;
  requests: {
    data: AvailableHotelsPayloadType | null;
    error: string | null;
    isLoading: boolean;
  };
};

export type AvailableHotelsStateType = {
  availableHotels: StateType;
};

export const initialAvailableHotelsState = {
  url: "https://fe-student-api.herokuapp.com/api/hotels?",

  // url: "https://fe-student-api.herokuapp.com/api/hotels?search=",
  isClicked: false,
  inputValue: "",
  requests: { data: null, error: null, isLoading: false },
};
