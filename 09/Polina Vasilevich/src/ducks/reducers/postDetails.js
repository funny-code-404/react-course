import {
  GET_DETAILS_REQUESTED,
  GET_DETAILS_SUCCEED,
  GET_DETAILS_FAILED,
} from "../../constants/actionTypes";

export const initialPostDetailsState = {
  postDetails: {},
  error: null,
  isFetching: false,
};

export const postDetails = (state = initialPostDetailsState, action) => {
  switch (action.type) {
    case GET_DETAILS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };

    case GET_DETAILS_SUCCEED:
      return {
        ...state,
        isFetching: false,
        postDetails: action.payload,
      };

    case GET_DETAILS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
