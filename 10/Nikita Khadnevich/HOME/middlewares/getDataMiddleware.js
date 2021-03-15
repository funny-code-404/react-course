import { ACTION_GET_POSTS } from '../ducs/posts';

const paths = {
  posts: '/posts',
  todos: '/todos'
};

export const getDataMiddleware = () => (dispatch) => (action) => {
  const { path } = action;

  switch (path) {
    case paths.posts:
      dispatch(ACTION_GET_POSTS(path));
      break;
      case paths.todos:
        dispatch(ACTION_GET_POSTS(path));
        break;
    default:
      dispatch(action);
  }
};
