import { initialTodosState } from "@ducks/todos";
import { initialPostsState } from "@ducks/posts";
import { initialPostDetailsState } from "@ducks/postDetails";
import { initialTodoDetailsState } from "@ducks/todoDetails";

export const initialState = {
  todos: initialTodosState,
  posts: initialPostsState,
  postDetails: initialPostDetailsState,
  todoDetails: initialTodoDetailsState,
};
