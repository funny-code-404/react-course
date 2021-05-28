import {
  GET_TODO_DETAILS_REQUESTED,
  GET_TODO_DETAILS_SUCCEED,
  GET_TODO_DETAILS_FAILED,
} from "@constants/actionTypes";

const getTodoDetailsRequested = () => ({
  type: GET_TODO_DETAILS_REQUESTED,
});

const getTodoDetailsSucceed = (data) => ({
  type: GET_TODO_DETAILS_SUCCEED,
  payload: data,
});

const getTodoDetailsFailed = (error) => ({
  type: GET_TODO_DETAILS_FAILED,
  payload: error,
});

export const ACTION_GET_TODO_DETAILS = (url, id) => async (dispatch) => {
  try {
    dispatch(getTodoDetailsRequested());
    const res = await fetch(url + `/${id}`);
    const data = await res.json();

    dispatch(getTodoDetailsSucceed(data));
  } catch (error) {
    dispatch(getTodoDetailsFailed(error));
  }
};

export const initialTodoDetailsState = {
  todoDetails: null,
  error: null,
  isFetching: false,
};

export const todoDetails = (state = initialTodoDetailsState, action) => {
  switch (action.type) {
    case GET_TODO_DETAILS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };

    case GET_TODO_DETAILS_SUCCEED:
      return {
        ...state,
        todoDetails: action.payload,
        isFetching: false,
      };

    case GET_TODO_DETAILS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
