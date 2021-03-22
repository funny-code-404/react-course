import { ADD_STRUCTURES_SUCCESS, ADD_STRUCTURES_REQUESTED, ADD_STRUCTURES_ERROR } from './actions'

export const initialStructuresState = {
  structures: [],
  status: null,
  error: null
}

export const structures = (state = initialStructuresState, action) => {
  switch (action.type) {
    case ADD_STRUCTURES_REQUESTED:
      return {
        ...state,
        status: 'requested'
      }

    case ADD_STRUCTURES_SUCCESS:
      return {
        ...state,
        structures: action.payload,
        status: 'success'
      }

    case ADD_STRUCTURES_ERROR:
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
