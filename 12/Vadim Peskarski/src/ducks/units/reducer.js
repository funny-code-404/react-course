import { ADD_UNITS_SUCCESS, ADD_UNITS_REQUESTED, ADD_UNITS_ERROR } from './actions'

export const initialUnitsState = {
  units: [],
  status: null,
  error: null
}

export const units = (state = initialUnitsState, action) => {
  switch (action.type) {
    case ADD_UNITS_REQUESTED:
      return {
        ...state,
        status: 'requested'
      }

    case ADD_UNITS_SUCCESS:
      return {
        ...state,
        units: action.payload,
        status: 'success'
      }

    case ADD_UNITS_ERROR:
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
