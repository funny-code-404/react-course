import {
  GET_POSTS_REQUESTED,
  GET_POSTS_SUCCEED,
  GET_POSTS_FAILED,
} from "@constants/actionTypes";

const getPostsRequested = () => ({
  type: GET_POSTS_REQUESTED,
});

const getPostsSucceed = (data) => ({
  type: GET_POSTS_SUCCEED,
  payload: data,
});

const getPostsFailed = (error) => ({
  type: GET_POSTS_FAILED,
  payload: error,
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
        isFetching: false,
        posts: action.payload,
      };

    case GET_POSTS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
