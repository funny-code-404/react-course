import { combineReducers } from "redux";
import { todos } from "../ducks/todos";
import { posts } from "../ducks/posts";

export default combineReducers({
  todos,
  posts,
});
