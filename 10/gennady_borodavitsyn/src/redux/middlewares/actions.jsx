// ACTION TYPES
export const GET_COMMENTS_DATA = 'GET_COMMENTS_DATA';

// ACTION CREATORS
export const ACTION_GET_COMMENTS_DATA = (url) => ({
  type: GET_COMMENTS_DATA,
  payload: url,
});
