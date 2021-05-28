const initialState = {
  todos: [],
};

const GET_TODOS = 'GET_TODOS';

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: [...state.todos, ...action.payload] };
    default:
      return state;
  }
};

export const GET_TODOS_ACTION = payload => ({ type: GET_TODOS, payload });
