export const GET_POSTS_DATA_REQUESTED = 'GET_POSTS_DATA_REQUESTED';
export const GET_POSTS_DATA_SACCEED = 'GET_POSTS_DATA_SACCEED ';
export const GET_POSTS_DATA_FAILED = 'GET_POSTS_DATA_FAILED';

export const ACTION_GET_POSTS_DATA_REQUESTED = (url) => {
  return {
    type: GET_POSTS_DATA_REQUESTED,
    payload: url,
  };
};

export const ACTION_GET_POSTS_DATA_SACCEED = (data) => {
  return {
    type: GET_POSTS_DATA_SACCEED,
    payload: data,
  };
};
export const ACTION_GET_POSTS_DATA_FAILED = (error) => {
  return {
    type: GET_POSTS_DATA_FAILED,
    payload: error.message,
  };
};
