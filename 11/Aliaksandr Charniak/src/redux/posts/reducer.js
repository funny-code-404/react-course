import { GET_DATA_POSTS_REQUESTED, GET_DATA_POSTS_SUCCEED, GET_DATA_POSTS_FAILED } from './actions'
import { initialPostsState } from './initialState.js'

export const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_DATA_POSTS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      }
    case GET_DATA_POSTS_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    case GET_DATA_POSTS_FAILED:
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
