import { combineReducers } from 'redux';
import { todos } from '../ducks/todos.js';
import { posts } from '../ducks/posts.js';

export default combineReducers({
  todos,
  posts
});
