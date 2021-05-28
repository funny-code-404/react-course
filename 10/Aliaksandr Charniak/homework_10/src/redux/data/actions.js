//ACTION TYPES
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'
export const COMPLETE_NOTIFICATION = 'COMPLETE_NOTIFICATION'
export const CHECK_DATE = 'CHECK_DATE'

//ACTION CREATORS
export const ACTION_ADD_NOTIFICATION = (payload) => {
  return {
    type: ADD_NOTIFICATION,
    payload,
  }
}

export const ACTION_DELETE_NOTIFICATION = (payload) => ({
  type: DELETE_NOTIFICATION,
  payload,
})

export const ACTION_COMPLETE_NOTIFICATION = (payload) => ({
  type: COMPLETE_NOTIFICATION,
  payload,
})

export const ACTION_CHECK_DATE = (payload) => ({
  type: CHECK_DATE,
  payload,
})
