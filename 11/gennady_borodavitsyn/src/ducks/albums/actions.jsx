// ACTIONS TYPES
export const GET_ALBUMS_DATA_REQUESTED = 'GET_ALBUMS_DATA_REQUESTED';
export const GET_ALBUMS_DATA_SUCCEED = 'GET_ALBUMS_DATA_SUCCEED';
export const GET_ALBUMS_DATA_FAILED = 'GET_ALBUMS_DATA_FAILED';

// ACTION CREATORS
export const ACTION_GET_ALBUMS_DATA_REQUESTED = (payload) => ({
  type: GET_ALBUMS_DATA_REQUESTED,
  payload,
});

export const ACTION_GET_ALBUMS_DATA_SUCCEED = (data) => ({
  type: GET_ALBUMS_DATA_SUCCEED,
  payload: data,
});

export const ACTION_GET_ALBUMS_DATA_FAILED = (error) => ({
  type: GET_ALBUMS_DATA_FAILED,
  payload: error.message,
});
