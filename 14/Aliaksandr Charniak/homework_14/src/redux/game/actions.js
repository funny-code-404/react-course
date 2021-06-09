export const CHANGE_BOARD_DATA = 'CHANGE_BOARD_DATA'
export const CHANGE_PLAING_STATUS = 'CHANGE_PLAING_STATUS'
export const INCREMENT_GENERATION = 'INCREMENT_GENERATION'

export const ACTION_CHANGE_BOARD_DATA = (data) => ({
  type: CHANGE_BOARD_DATA,
  payload: data,
})

export const ACTION_CHANGE_PLAING_STATUS = (status) => ({
  type: CHANGE_PLAING_STATUS,
  payload: status,
})

export const ACTION_INCREMENT_GENERATION = (generation) => ({
  type: INCREMENT_GENERATION,
  payload: generation,
})
