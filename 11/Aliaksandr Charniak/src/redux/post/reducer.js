import { GET_DATA_POST_REQUESTED, GET_DATA_POST_SUCCEED, GET_DATA_POST_FAILED } from './actions'
import { initialPostState } from './initialState'

export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case GET_DATA_POST_REQUESTED:
      return {
        ...state,
        isFetching: true,
      }
    case GET_DATA_POST_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    case GET_DATA_POST_FAILED:
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
