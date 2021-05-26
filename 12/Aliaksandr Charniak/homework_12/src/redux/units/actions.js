export const GET_UNITS_REQUESTED = 'GET_UNITS_REQUESTED'
export const GET_UNITS_SUCCEED = 'GET_UNITS_SUCCEED'
export const GET_UNITS_FAILED = 'GET_UNITS_FAILED'

export const ACTION_GET_UNITS_REQUESTED = (url) => ({
  type: GET_UNITS_REQUESTED,
  payload: url,
})

export const ACTION_GET_UNITS_SUCCEED = (data) => ({
  type: GET_UNITS_SUCCEED,
  payload: data,
})

export const ACTION_GET_UNITS_FAILED = (error) => ({
  type: GET_UNITS_FAILED,
  payload: error,
})
