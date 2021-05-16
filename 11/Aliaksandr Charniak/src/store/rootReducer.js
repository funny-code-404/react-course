import { combineReducers } from 'redux'

import { todosReducer } from '../redux/todos/reducer'
import { todoReducer } from '../redux/todo/reducer'
import { postsReducer } from '../redux/posts/reducer'
import { postReducer } from '../redux/post/reducer'

export const rootReducer = combineReducers({
  todos: todosReducer,
  todo: todoReducer,
  posts: postsReducer,
  post: postReducer,
})
