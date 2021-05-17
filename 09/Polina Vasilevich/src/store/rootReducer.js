import { combineReducers } from "redux";
import { todos } from "../ducks/reducers/todos";
import { posts } from "../ducks/reducers/posts";
import { postDetails } from "../ducks/reducers/postDetails";

export default combineReducers({
  todos,
  posts,
  postDetails,
});
