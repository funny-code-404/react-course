export const GET_TODOS_REQUESTED = 'GET_TODOS_REQUESTED';
export const GET_TODOS_SUCCEED = 'GET_TODOS_SUCCEED';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';

export const getTodosRequested = (url) => {
  console.log('action requested');
  return {
    type: GET_TODOS_REQUESTED,
    payload: url,
  };
};

export const getTodosSucceed = (response) => {
  console.log('action succeed');
  return {
    type: GET_TODOS_SUCCEED,
    response,
  };
};

export const getTodosFailed = (error) => ({
  type: GET_TODOS_FAILED,
  error,
});