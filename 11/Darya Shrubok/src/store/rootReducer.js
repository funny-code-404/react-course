import { combineReducers } from "redux";
import { todosReducer } from "../ducks/todos";
import { postsReducer } from "../ducks/posts";

export const rootReducer = combineReducers({
  todos: todosReducer,
  posts: postsReducer,
});
