import { GET_UNITS_REQUESTED, GET_UNITS_SUCCEED, GET_UNITS_FAILED } from './actions'

export const initialUnitsState = {
  data: null,
  error: null,
  isFetching: false,
}

export const unitsReducer = (state = initialUnitsState, action) => {
  switch (action.type) {
    case GET_UNITS_REQUESTED:
      return { ...state, isFetching: true }
    case GET_UNITS_SUCCEED:
      return { ...state, isFetching: false, data: action.payload }
    case GET_UNITS_FAILED:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return { ...state }
  }
}
