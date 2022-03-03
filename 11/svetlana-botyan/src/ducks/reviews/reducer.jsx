import {
  GET_REVIEWS_DATA_REQUESTED,
  GET_REVIEWS_DATA_SACCEED,
  GET_REVIEWS_DATA_FAILED,
} from './actions';

export const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_REVIEWS_DATA_SACCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: initialState.error,
      };
    case GET_REVIEWS_DATA_FAILED:
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
