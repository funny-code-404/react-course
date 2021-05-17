import { initialTodosState } from "../ducks/reducers/todos";
import { initialPostsState } from "../ducks/reducers/posts";
import { initialPostDetailsState } from "../ducks/reducers/postDetails";

export const initialState = {
  todos: initialTodosState,
  posts: initialPostsState,
  postDetails: initialPostDetailsState,
};
