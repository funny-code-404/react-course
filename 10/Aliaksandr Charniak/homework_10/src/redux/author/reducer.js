import { ADD_AUTHOR } from './actions'

export const initialAuthorState = []

const authorReducer = (state = initialAuthorState, action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      return state.includes(action.payload) ? [...state] : [...state, action.payload]
    default:
      return [...state]
  }
}

export default authorReducer
