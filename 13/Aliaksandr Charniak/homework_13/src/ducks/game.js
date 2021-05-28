import { createReducer, createAction } from '@reduxjs/toolkit'

import { check } from '../Utils/functions'

const initialGameState = {
  fields: Array(9).fill(''),
  history: [],
  isWin: false,
  step: 'X',
  isDraw: false,
  isGameStarted: false,
  isShowClear: false,
  isShowHistory: false,
  historyItem: null,
  historyIndex: 0,
}

export const START_GAME = createAction('START_GAME')
export const CHANGE_GAME_FIELD = createAction('CHANGE_GAME_FIELD')
export const CLEAR_FIELDS = createAction('CLEAR_FIELDS')
export const EXIT_GAME = createAction('EXIT_GAME')
export const SET_HISTORY_FLAG = createAction('SET_HISTORY_FLAG')
export const SHOW_HISTORY = createAction('SHOW_HISTORY')

const gameReducer = createReducer(initialGameState, {
  [START_GAME]: (state, action) => {
    state.isGameStarted = true
  },
  [CLEAR_FIELDS]: (state, action) => {
    return {
      ...initialGameState,
      isGameStarted: true,
    }
  },
  [EXIT_GAME]: (state, action) => {
    return initialGameState
  },
  [SET_HISTORY_FLAG]: (state, action) => {
    const history = [...state.history]
    return {
      ...state,
      isShowHistory: true,
      historyItem: history[history.length - 1],
    }
  },
  [CHANGE_GAME_FIELD]: (state, action) => {
    const fields = [...state.fields]
    const step = state.step
    let historyIndex = state.historyIndex
    const index = action.payload
    const value = fields[index]
    const history = [...state.history]
    const isNoEmptyField = value === 'X' || value === 'O'

    if (isNoEmptyField) {
      return state
    }

    history.push(fields)
    historyIndex = history.length - 1

    fields[index] = step

    const isWin = check(fields)

    if (!fields.includes('') && !isWin) {
      return {
        ...state,
        history,
        historyIndex,
        fields,
        isDraw: true,
        isShowClear: false,
      }
    }

    return {
      ...state,
      history,
      historyIndex,
      step: step === 'X' ? 'O' : 'X',
      fields,
      isWin: isWin && step,
      isShowClear: !isWin,
    }
  },
  [SHOW_HISTORY]: (state, action) => {
    const history = [...state.history]
    const historyIndex = state.historyIndex + action.payload
    if (historyIndex < 0 || historyIndex >= history.length) {
      return state
    }
    return {
      ...state,
      historyItem: history[historyIndex],
      historyIndex,
    }
  },
})

export default gameReducer
