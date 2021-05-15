export const GET_STRU_REQUESTED = 'GET_STRU_REQUESTED';
export const GET_STRU_SUCCEED = 'GET_STRU_SUCCEED';
export const GET_STRU_FAILED = 'GET_STRU_FAILED';
export const GET_SPAN_STRU_STATUS = 'GET_SPAN_STRU_STATUS';
export const GET_ROUTE_STRU_MENU = 'GET_ROUTE_STRU_MENU';
export const GET_STRU_DETAIL_REQUESTED = 'GET_STRU_DETAIL_REQUESTED';
export const GET_STRU_DETAIL_SUCCEED = 'GET_STRU_DETAIL_SUCCEED';
export const GET_STRU_DETAIL_FAILED = 'GET_STRU_DETAIL_FAILED';


export const ACTION_GET_STRU_Requested = (url) => {
  console.log('action requested');
  return {
    type: GET_STRU_REQUESTED,
    payload: url,
    isFetching: true
  };
};
export const ACTION_GET_STRU_Succeed = (response) => {
  console.log('action succeed');
  return {
    type: GET_STRU_SUCCEED,
    response,
    isFetching: false
  };
};
export const ACTION_GET_STRU_FAILED = (error) => ({
  type: GET_STRU_FAILED,
  error,
  isFetching: false
});

export const ACTION_GET_STRU_DETAIL_Requested = (url) => {
  return {
    type: GET_STRU_DETAIL_REQUESTED,
    payload: url
  }
}
export const ACTION_GET_STRU_DETAIL_Succeed = (response) => {
  console.log('action succeed');
  return {
    type: GET_STRU_DETAIL_SUCCEED,
    response,
    isFetching: false
  };
};
export const ACTION_GET_STRU_DETAIL_FAILED = (response) => {
  console.log('action succeed');
  return {
    type: GET_STRU_DETAIL_FAILED,
    error,
    isFetching: false
  };
};

export const ACTION_GET_SPAN_STRU_STATUS = (span) => ({
  type: GET_SPAN_STRU_STATUS,
  span,
});

export const ACTION_GET_ROUTE_STRU_MENU = (path) => ({
  type: GET_ROUTE_STRU_MENU,
  path,
});
