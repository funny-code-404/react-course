const ADD_TODOS_SUUCCESS = 'ADD_TODOS_SUCCESS';
const ADD_TODOS_ERROR = 'ADD_TODOS_ERROR'

export const getTodos = (path) => async (dispatch) => {
  try {
    const data = await fetch(path);
    const result = await data.json();
    dispatch(ACTION_ADD_TODOS_SUCCESS(result));
  } catch (error) {
    dispatch(ACTION_ADD_TODOS_ERROR(error))
  }

}

export const ACTION_ADD_TODOS_SUCCESS = (todos) => {
  return {
    type: ADD_TODOS_SUUCCESS,
    payload: todos
  }
}

export const ACTION_ADD_TODOS_ERROR = (error) => {
  return {
    type: ADD_TODOS_ERROR,
    payload: error
  }
}

export const initialTodoState = {
  todos: []
}

export const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODOS_SUUCCESS:
      return {
        ...state,
        todos: action.payload
      }
    case ADD_TODOS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return { ...state };
  }
}
