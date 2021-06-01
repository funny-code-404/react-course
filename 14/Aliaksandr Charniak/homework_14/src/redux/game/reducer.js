import { CHANGE_BOARD_DATA, CHANGE_PLAING_STATUS, INCREMENT_GENERATION } from './actions'

export const initialGameState = {
  playing: false,
  generation: 0,
  rows: 10,
  columns: 10,
  boardData: [],
}

export const gameReducer = (state = initialGameState, action) => {
  switch (action.type) {
    case CHANGE_BOARD_DATA:
      return { ...state, boardData: action.payload }
    case CHANGE_PLAING_STATUS:
      return { ...state, playing: action.payload }
    case INCREMENT_GENERATION:
      return { ...state, generation: action.payload }
    default:
      return { ...state }
  }
}
