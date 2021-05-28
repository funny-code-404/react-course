export const SET_LEAVE_IN_SYSTEM = 'SET_LEAVE_IN_SYSTEM'

export const ACTION_SET_LEAVE_IN_SYSTEM = ({ payload }) => {
  return {
    type: SET_LEAVE_IN_SYSTEM,
    payload,
  }
}

export const initialEntryFormState = {
  isLeaveInSystem: true,
}

export const entryForm = (state = initialEntryFormState, action) => {
  switch (action.type) {
    case SET_LEAVE_IN_SYSTEM:
      return {
        ...state,
        isLeaveInSystem: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
