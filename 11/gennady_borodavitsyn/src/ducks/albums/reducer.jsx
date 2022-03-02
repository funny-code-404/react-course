import {
  GET_ALBUMS_DATA_REQUESTED,
  GET_ALBUMS_DATA_SUCCEED,
  GET_ALBUMS_DATA_FAILED,
} from './actions';

// INITIAL STATE
export const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

// REDUCER
export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ALBUMS_DATA_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: initialState.error,
      };
    case GET_ALBUMS_DATA_FAILED:
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
