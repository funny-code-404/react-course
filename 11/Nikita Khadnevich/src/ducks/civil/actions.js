export const GET_CIVIL_REQUESTED = 'GET_CIVIL_REQUESTED';
export const GET_CIVIL_SUCCEED = 'GET_CIVIL_SUCCEED';
export const GET_CIVIL_FAILED = 'GET_CIVIL_FAILED';
export const GET_SPAN_STATUS = 'GET_SPAN_STATUS';
export const GET_ROUTE_MENU = 'GET_ROUTE_MENU';

export const GET_CIVIL_REQUESTED_DETAIL = 'GET_CIVIL_REQUESTED_DETAIL';
export const GET_CIVIL_DETAIL_SUCCEED = 'GET_CIVIL_DETAIL_SUCCEED';
export const GET_CIVIL_DETAIL_FAILED = 'GET_CIVIL_DETAIL_FAILED';

export const ACTION_GET_CIVIL_Requested = (url) => {
  console.log('action requested');
  return {
    type: GET_CIVIL_REQUESTED,
    payload: url,
    isFetching: true
  };
};

export const ACTION_GET_CIVIL_Succeed = (response) => {
  console.log('action succeed');
  return {
    type: GET_CIVIL_SUCCEED,
    response,
    isFetching: false
  };
};

export const ACTION_GET_CIVIL_FAILED = (error) => ({
  type: GET_CIVIL_FAILED,
  error,
  isFetching: false
});

export const ACTION_GET_ROUTE_CIVIL_MENU = (path) => ({
  type: GET_ROUTE_MENU,
  path,
});

export const ACTION_GET_CIVIL_REQUESTED_DETAIL = (url) => {
  console.log('action requested');
  return {
    type: GET_CIVIL_REQUESTED_DETAIL,
    payloadDetail: url,
    isFetching: true
  };
};

export const ACTION_GET_CIVIL_DETAIL_Succeed = (response) => {
  console.log('action succeed');
  return {
    type: GET_CIVIL_DETAIL_SUCCEED,
    response,
    isFetching: false
  };
};

export const ACTION_GET_CIVIL_DETAIL_FAILED = (error) => ({
  type: GET_CIVIL_DETAIL_FAILED,
  error,
  isFetching: false
});