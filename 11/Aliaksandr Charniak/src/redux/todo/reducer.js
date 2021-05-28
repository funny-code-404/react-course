import { GET_DATA_TODO_REQUESTED, GET_DATA_TODO_SUCCEED, GET_DATA_TODO_FAILED } from './actions'
import { initialTodoState } from './initialState'

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case GET_DATA_TODO_REQUESTED:
      return {
        ...state,
        isFetching: true,
      }
    case GET_DATA_TODO_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    case GET_DATA_TODO_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    default:
      return {
        ...state,
      }
  }
}
