export const SET_ACTION = 'SET_ACTION'

export const ACTION_SET = ({ payload }) => {
  return {
    type: SET_ACTION,
    payload,
  }
}

export const initialActionButtonState = {
  action: 0,
}

export const actionButton = (state = initialActionButtonState, action) => {
  switch (action.type) {
    case SET_ACTION:
      return {
        ...state,
        action: +action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
