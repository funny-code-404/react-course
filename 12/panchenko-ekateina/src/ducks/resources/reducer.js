import { GET_RESOURCES_SUCCEED } from "./actions";

export const initialResourcesState = {
  data: null,
  isFetching: false,
  error: null,
};

export const resources = (state = initialResourcesState, action) => {
  switch (action.type) {
    case GET_RESOURCES_SUCCEED:
      return {
        ...state,
        data: action.response,
      };
    default:
      return { ...state };
  }
};
