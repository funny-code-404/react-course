import { ADD_TECHS_SUCCESS, ADD_TECHS_REQUESTED, ADD_TECHS_ERROR } from './actions'

export const initialTechsState = {
  techs: [],
  status: null,
  error: null
}

export const technologies = (state = initialTechsState, action) => {
  switch (action.type) {
    case ADD_TECHS_REQUESTED:
      return {
        ...state,
        status: 'requested'
      }

    case ADD_TECHS_SUCCESS:
      return {
        ...state,
        techs: action.payload,
        status: 'success'
      }

    case ADD_TECHS_ERROR:
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
