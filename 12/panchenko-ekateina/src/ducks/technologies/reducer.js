import { GET_TECHNOLOGIES_SUCCEED } from "./actions";

export const initialTechnologiesState = {
  data: null,
  isFetching: false,
  error: null,
};

export const technologies = (state = initialTechnologiesState, action) => {
  switch (action.type) {
    case GET_TECHNOLOGIES_SUCCEED:
      return {
        ...state,
        data: action.response,
      };
    default:
      return { ...state };
  }
};
