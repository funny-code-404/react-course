import { API } from "../api";

export const GET_POSTS_REQUESTED = "GET_POSTS_REQUESTED";
export const GET_POSTS_SUCCEED = "GET_POSTS_SUCCEED";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";

export const getPostsRequested = () => ({
  type: GET_POSTS_REQUESTED,
});

export const getPostsSucceed = (response) => ({
  type: GET_POSTS_SUCCEED,
  response,
});

export const getPostsFailed = (error) => ({
  type: GET_POSTS_FAILED,
  error,
});

export const ACTION_GET_POSTS = (path) => async (dispatch) => {
  try {
    dispatch(getPostsRequested());

    const res = await API.get(path);
    const json = await res.json();

    dispatch(getPostsSucceed(json));
  } catch (error) {
    dispatch(getPostsFailed(error));
  }
};

export const initialPostsState = {
  data: [],
  isFetching: false,
  error: null,
};

export const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_POSTS_SUCCEED:
      return {
        ...state,
        data: action.response,
        isFetching: false,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return { ...state };
  }
};
