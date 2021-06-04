import { GET_STRUCTURES_REQUESTED, GET_STRUCTURES_SUCCEED, GET_STRUCTURES_FAILED } from './actions'

export const initialStructuresState = {
  data: null,
  error: null,
  isFetching: false,
}

export const structuresReducer = (state = initialStructuresState, action) => {
  switch (action.type) {
    case GET_STRUCTURES_REQUESTED:
      return { ...state, isFetching: true }
    case GET_STRUCTURES_SUCCEED:
      return { ...state, isFetching: false, data: action.payload }
    case GET_STRUCTURES_FAILED:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return { ...state }
  }
}
