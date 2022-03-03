import {
  GET_USERS_DATA_REQUESTED,
  GET_USERS_DATA_SUCCEED,
  GET_USERS_DATA_FAILED,
} from './actions';

export const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USERS_DATA_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: initialState.error,
      };
    case GET_USERS_DATA_FAILED:
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
