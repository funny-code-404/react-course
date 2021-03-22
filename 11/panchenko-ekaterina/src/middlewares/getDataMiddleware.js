import { ACTION_GET_TODOS } from "../ducks/todos";
import { ACTION_GET_POSTS } from "../ducks/posts";

const paths = {
  todos: "/todos",
  posts: "/posts",
};

export const getDataMiddleware = () => (dispatch) => (action) => {
  const { path } = action;

  switch (path) {
    case paths.todos:
      dispatch(ACTION_GET_TODOS(path));
      break;
    case paths.posts:
      dispatch(ACTION_GET_POSTS(path));
      break;
    default:
      dispatch(action);
  }
};
