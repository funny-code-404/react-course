export const GET_DATA_REQUESTED = "GET_DATA_REQUESTED";
export const GET_DATA_SUCCEED = "GET_DATA_SUCCEED";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const GET_ITEM_REQUESTED = "GET_ITEM_REQUESTED";
export const GET_ITEM_SUCCEED = "GET_ITEM_SUCCEED";
export const GET_ITEM_FAILED = "GET_ITEM_FAILED";

export const initialTodosState = {
  data: {},
  item: null,
  error: null,
  isFetching: false,
};

export const ACTION_GET_DATA_REQUESTED = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA_REQUESTED });

    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    dispatch({ type: GET_DATA_SUCCEED, payload: data });
  } catch (e) {
    console.log("catch");
    dispatch({
      type: GET_DATA_FAILED,
      payload: e.message,
    });
  }
};

export const ACTION_GET_ITEM_REQUESTED = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ITEM_REQUESTED });

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const item = await res.json();

    dispatch({ type: GET_ITEM_SUCCEED, payload: item });
  } catch (e) {
    dispatch({
      type: GET_ITEM_FAILED,
      payload: e.message,
    });
  }
};

export const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCEED:
      return {
        ...state,
        error: null,
        data: action.payload,
        isFetching: false,
      };
    case GET_DATA_REQUESTED:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case GET_ITEM_SUCCEED:
      return {
        ...state,
        error: null,
        item: action.payload,
        isFetching: false,
      };
    case GET_ITEM_REQUESTED:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case GET_ITEM_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return { ...state };
  }
};
