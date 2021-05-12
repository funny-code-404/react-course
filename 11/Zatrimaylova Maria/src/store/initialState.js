import { initialPostsState } from '../ducks/ducks_posts.js';
import { initialTodosState } from '../ducks/ducks_todos.js';
import { initialCurrentPostState } from '../ducks/ducks_currentPost.js';
import { initialCurrentTodosState } from '../ducks/ducks_currentTodos.js';

export const initialState = {
    posts: initialPostsState,
    todos: initialTodosState,
    currentPost: initialCurrentPostState,
    currentTodos: initialCurrentTodosState,
};