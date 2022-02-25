export const GET_USERS_DATA_REQUESTED = 'GET_USERS_DATA_REQUESTED';
export const GET_USERS_DATA_SUCCEED = 'GET_USERS_DATA_SUCCEED';
export const GET_USERS_DATA_FAILED = 'GET_USERS_DATA_FAILED';

export const ACTION_GET_USERS_DATA_REQUESTED = (url) => {
  console.log('ACTION_GET_USERS_DATA_REQUESTED');
  return {
    type: GET_USERS_DATA_REQUESTED,
    payload: url,
  };
};

export const ACTION_GET_USERS_DATA_SUCCEED = (data) => {
  console.log('ACTION_GET_USERS_DATA_SUCCEED');
  return {
    type: GET_USERS_DATA_SUCCEED,
    payload: data,
  };
};

export const ACTION_GET_USERS_DATA_FAILED = (error) => ({
  type: GET_USERS_DATA_FAILED,
  payload: error.message,
});
