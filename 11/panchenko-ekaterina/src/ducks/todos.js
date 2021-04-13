import { API } from "../api";

export const GET_TODOS_REQUESTED = "GET_TODOS_REQUESTED";
export const GET_TODOS_SUCCEED = "GET_TODOS_SUCCEED";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const getTodosRequested = () => ({
  type: GET_TODOS_REQUESTED,
});

export const getTodosSucceed = (response) => ({
  type: GET_TODOS_SUCCEED,
  response,
});

export const getTodosFailed = (error) => ({
  type: GET_TODOS_FAILED,
  error,
});

export const ACTION_GET_TODOS = (path) => async (dispatch) => {
  try {
    dispatch(getTodosRequested());

    const res = await API.get(path);
    const json = await res.json();

    dispatch(getTodosSucceed(json));
  } catch (error) {
    dispatch(getTodosFailed(error));
  }
};

export const initialTodosState = {
  data: [],
  isFetching: false,
  error: null,
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
        data: action.response,
        isFetching: false,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return { ...state };
  }
};
