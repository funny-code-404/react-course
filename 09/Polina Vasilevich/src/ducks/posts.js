import {
  GET_DATA_REQUESTED,
  GET_DATA_SUCCEED,
  GET_DATA_FAILED,
} from "../constants/actionTypes";

const getPostsRequested = () => ({
  type: GET_DATA_REQUESTED,
});

const getPostsSucceed = (data) => ({
  type: GET_DATA_SUCCEED,
  payload: {
    data,
  },
});

const getPostsFailed = (error) => ({
  type: GET_DATA_FAILED,
  payload: {
    error,
  },
});

export const ACTION_GET_POSTS = (url) => async (dispatch) => {
  try {
    dispatch(getPostsRequested());
    const res = await fetch(url);
    const data = await res.json();

    dispatch(getPostsSucceed(data));
  } catch (error) {
    dispatch(getPostsFailed(error));
  }
};

export const initialPostsState = {
  posts: [],
  error: null,
  isFetching: false,
};

export const dataPostsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };

    case GET_DATA_SUCCEED:
      return {
        ...state,
        isFetching: false,
        posts: action.payload.data,
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};
