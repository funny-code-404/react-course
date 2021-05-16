import { combineReducers } from "redux";
import { dataTodosReducer } from "../ducks/todos";
import { dataPostsReducer } from "../ducks/posts";

export default combineReducers({
  todos: dataTodosReducer,
  posts: dataPostsReducer,
});
