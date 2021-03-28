import { ACTION_GET_TODOS } from '../ducks/todos';

const paths = {
  todos: '/todos',
};

export const getDataMiddleware = () => (dispatch) => (action) => {
  const { path } = action;

  switch (path) {
    case paths.todos:
      dispatch(ACTION_GET_TODOS(path));
      break;
    default:
      dispatch(action);
  }
};
