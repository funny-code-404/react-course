import {
  GET_POST_DETAILS_REQUESTED,
  GET_POST_DETAILS_SUCCEED,
  GET_POST_DETAILS_FAILED,
} from "@constants/actionTypes";

const getPostDetailsRequested = () => ({
  type: GET_POST_DETAILS_REQUESTED,
});

const getPostDetailsSucceed = (data) => ({
  type: GET_POST_DETAILS_SUCCEED,
  payload: data,
});

const getPostDetailsFailed = (error) => ({
  type: GET_POST_DETAILS_FAILED,
  payload: error,
});

///
export const resetPostDetails = () => ({
  type: "RESET_POST_DETAILS",
});
///

export const ACTION_GET_POST_DETAILS = (url, id) => async (dispatch) => {
  try {
    dispatch(getPostDetailsRequested());
    const res = await fetch(url + `/${id}`);
    const data = await res.json();

    dispatch(getPostDetailsSucceed(data));
  } catch (error) {
    dispatch(getPostDetailsFailed(error));
  }
};

export const initialPostDetailsState = {
  postDetails: null,
  error: null,
  isFetching: false,
};

export const postDetails = (state = initialPostDetailsState, action) => {
  switch (action.type) {
    case GET_POST_DETAILS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };

    case GET_POST_DETAILS_SUCCEED:
      return {
        ...state,
        isFetching: false,
        postDetails: action.payload,
      };

    case GET_POST_DETAILS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    ///
    case "RESET_POST_DETAILS":
      return initialPostDetailsState;
    ///
    default:
      return { ...state };
  }
};
