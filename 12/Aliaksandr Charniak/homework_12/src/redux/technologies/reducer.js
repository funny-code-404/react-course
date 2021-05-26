import {
  GET_TECHNOLOGIES_REQUESTED,
  GET_TECHNOLOGIES_SUCCEED,
  GET_TECHNOLOGIES_FAILED,
} from './actions'

export const initialTechnologiesState = {
  data: null,
  error: null,
  isFetching: false,
}

export const technologiesReducer = (state = initialTechnologiesState, action) => {
  switch (action.type) {
    case GET_TECHNOLOGIES_REQUESTED:
      return { ...state, isFetching: true }
    case GET_TECHNOLOGIES_SUCCEED:
      return { ...state, isFetching: false, data: action.payload }
    case GET_TECHNOLOGIES_FAILED:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return { ...state }
  }
}
