import {
  GET_DATA_REQUESTED,
  GET_DATA_SUCCEED,
  GET_DATA_FAILED,
} from "../constants/actionTypes";

const getTodosRequested = () => ({
  type: GET_DATA_REQUESTED,
});

const getTodosSucceed = (data) => ({
  type: GET_DATA_SUCCEED,
  payload: {
    data,
  },
});

const getTodosFailed = (error) => ({
  type: GET_DATA_FAILED,
  payload: {
    error,
  },
});

export const ACTION_GET_TODOS = (url) => async (dispatch) => {
  try {
    dispatch(getTodosRequested());
    const res = await fetch(url);
    const data = await res.json();

    dispatch(getTodosSucceed(data));
  } catch (error) {
    dispatch(getTodosFailed(error));
  }
};

export const initialTodosState = {
  todos: [],
  error: null,
  isFetching: false,
};

export const dataTodosReducer = (state = initialTodosState, action) => {
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
        todos: action.payload.data,
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
