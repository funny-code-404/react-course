import { ADD_CIVS_SUCCESS, ADD_CIVS_REQUESTED, ADD_CIVS_ERROR } from './actions'

export const initialCivsState = {
  civilizations: [],
  status: null,
  error: null
}

export const civilizations = (state = initialCivsState, action) => {
  switch (action.type) {
    case ADD_CIVS_REQUESTED:
      return {
        ...state,
        status: 'requested'
      }

    case ADD_CIVS_SUCCESS:
      return {
        ...state,
        civilizations: action.payload,
        status: 'success'
      }

    case ADD_CIVS_ERROR:
      return {
        ...state,
        error: action.payload,
        status: 'error'
      }

    default:
      return {
        ...state
      }
  }
}
