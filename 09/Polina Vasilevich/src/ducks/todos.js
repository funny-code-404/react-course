import {
  GET_TODOS_REQUESTED,
  GET_TODOS_SUCCEED,
  GET_TODOS_FAILED,
} from "@constants/actionTypes";

const getTodosRequested = () => ({
  type: GET_TODOS_REQUESTED,
});

const getTodosSucceed = (data) => ({
  type: GET_TODOS_SUCCEED,
  payload: data,
});

const getTodosFailed = (error) => ({
  type: GET_TODOS_FAILED,
  payload: error,
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

export const todos = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };

    case GET_TODOS_SUCCEED:
      return {
        ...state,
        isFetching: false,
        todos: action.payload,
      };

    case GET_TODOS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
