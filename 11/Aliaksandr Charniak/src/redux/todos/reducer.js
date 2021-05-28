import { GET_DATA_TODOS_REQUESTED, GET_DATA_TODOS_SUCCEED, GET_DATA_TODOS_FAILED } from './actions'
import { initialTodosState } from './initialState'

export const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_DATA_TODOS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      }
    case GET_DATA_TODOS_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    case GET_DATA_TODOS_FAILED:
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
