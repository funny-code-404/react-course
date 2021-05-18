import { combineReducers } from "redux";
import { todos } from "@ducks/todos";
import { posts } from "@ducks/posts";
import { postDetails } from "@ducks/postDetails";
import { todoDetails } from "@ducks/todoDetails";

export default combineReducers({
  todos,
  posts,
  postDetails,
  todoDetails,
});
