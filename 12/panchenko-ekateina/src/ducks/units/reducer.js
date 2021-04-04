import { GET_UNITS_SUCCEED } from "./actions";

export const initialUnitsState = {
  data: null,
  isFetching: false,
  error: null,
};

export const units = (state = initialUnitsState, action) => {
  switch (action.type) {
    case GET_UNITS_SUCCEED:
      return {
        ...state,
        data: action.response,
      };
    default:
      return { ...state };
  }
};
