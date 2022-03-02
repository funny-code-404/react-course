import {
  GET_POSTS_DATA_REQUESTED,
  GET_POSTS_DATA_SUCCEED,
  GET_POSTS_DATA_FAILED,
} from './actions';

// INITIAL STATE
export const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

// REDUCER
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_POSTS_DATA_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: initialState.error,
      };
    case GET_POSTS_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default:
      return {
        ...state,
      };
  }
};
