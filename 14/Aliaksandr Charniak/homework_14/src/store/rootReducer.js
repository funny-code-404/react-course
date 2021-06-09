import { combineReducers } from 'redux'

import { gameReducer } from '../redux/game/reducer'

export const rootReducer = combineReducers({
  game: gameReducer,
})
