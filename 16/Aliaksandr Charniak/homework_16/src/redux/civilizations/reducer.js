import {
  GET_CIVILIZATIONS_REQUESTED,
  GET_CIVILIZATIONS_SUCCEED,
  GET_CIVILIZATIONS_FAILED,
} from './actions'

export const initialCivilizationsState = {
  data: null,
  error: null,
  isFetching: false,
}

export const civilizationsReducer = (state = initialCivilizationsState, action) => {
  switch (action.type) {
    case GET_CIVILIZATIONS_REQUESTED:
      return { ...state, isFetching: true }
    case GET_CIVILIZATIONS_SUCCEED:
      return { ...state, isFetching: false, data: action.payload }
    case GET_CIVILIZATIONS_FAILED:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return { ...state }
  }
}
