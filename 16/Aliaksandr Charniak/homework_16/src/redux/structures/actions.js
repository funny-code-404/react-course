export const GET_STRUCTURES_REQUESTED = 'GET_STRUCTURES_REQUESTED'
export const GET_STRUCTURES_SUCCEED = 'GET_STRUCTURES_SUCCEED'
export const GET_STRUCTURES_FAILED = 'GET_STRUCTURES_FAILED'

export const ACTION_GET_STRUCTURES_REQUESTED = (url) => ({
  type: GET_STRUCTURES_REQUESTED,
  payload: url,
})

export const ACTION_GET_STRUCTURES_SUCCEED = (data) => ({
  type: GET_STRUCTURES_SUCCEED,
  payload: data,
})

export const ACTION_GET_STRUCTURES_FAILED = (error) => ({
  type: GET_STRUCTURES_FAILED,
  payload: error,
})
