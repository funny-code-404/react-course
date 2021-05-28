import { initialTodosState } from '../redux/todos/initialState'
import { initialTodoState } from '../redux/todo/initialState'
import { initialPostsState } from '../redux/posts/initialState'
import { initialPostState } from '../redux/post/initialState'

export const initialState = {
  todos: initialTodosState,
  todo: initialTodoState,
  posts: initialPostsState,
  post: initialPostState,
}
