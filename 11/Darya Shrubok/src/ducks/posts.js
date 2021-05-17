export const GET_POSTS_REQUESTED = "GET_POSTS_REQUESTED";
export const GET_POSTS_SUCCEED = "GET_POSTS_SUCCEED";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";

export const GET_POST_REQUESTED = "GET_POST_REQUESTED";
export const GET_POST_SUCCEED = "GET_POST_SUCCEED";
export const GET_POST_FAILED = "GET_POST_FAILED";

export const initialPostsState = {
  data: {},
  item: null,
  error: null,
  isFetching: false,
};

export const ACTION_GET_POSTS_REQUESTED = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POSTS_REQUESTED });

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    dispatch({ type: GET_POSTS_SUCCEED, payload: data });
  } catch (e) {
    dispatch({
      type: GET_POSTS_FAILED,
      payload: e.message,
    });
  }
};

export const ACTION_GET_POST_REQUESTED = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUESTED });

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const item = await res.json();

    dispatch({ type: GET_POST_SUCCEED, payload: item });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILED,
      payload: e.message,
    });
  }
};

export const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCEED:
      return {
        ...state,
        error: null,
        data: action.payload,
        isFetching: false,
      };
    case GET_POSTS_REQUESTED:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
      case GET_POST_SUCCEED:
        return {
          ...state,
          error: null,
          item: action.payload,
          isFetching: false,
        };
      case GET_POST_REQUESTED:
        return {
          ...state,
          error: null,
          isFetching: true,
        };
      case GET_POST_FAILED:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
        };
    default:
      return { ...state };
  }
};
