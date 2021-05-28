import { combineReducers } from '@reduxjs/toolkit'

import gameReducer from '../ducks/game'

export const rootReducer = combineReducers({
  game: gameReducer,
})

export default rootReducer
