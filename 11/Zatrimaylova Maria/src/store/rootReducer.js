import { combineReducers } from 'redux';
import { posts } from '../ducks/ducks_posts.js';
import { todos } from '../ducks/ducks_todos.js';
import { currentPost } from '../ducks/ducks_currentPost.js';
import { currentTodos } from '../ducks/ducks_currentTodos.js';

export default combineReducers({
    posts,
    todos,
    currentPost,
    currentTodos,
});