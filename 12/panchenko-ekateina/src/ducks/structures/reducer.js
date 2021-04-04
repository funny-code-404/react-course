import { GET_STRUCTURES_SUCCEED } from "./actions";

export const initialStructuresState = {
  data: null,
  isFetching: false,
  error: null,
};

export const structures = (state = initialStructuresState, action) => {
  switch (action.type) {
    case GET_STRUCTURES_SUCCEED:
      return {
        ...state,
        data: action.response,
      };
    default:
      return { ...state };
  }
};
