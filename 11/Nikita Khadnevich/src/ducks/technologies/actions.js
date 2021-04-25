export const GET_TECH_REQUESTED = 'GET_TECH_REQUESTED';
export const GET_TECH_SUCCEED = 'GET_TECH_SUCCEED';
export const GET_TECH_FAILED = 'GET_TECH_FAILED';
export const GET_SPAN_STATUS = 'GET_SPAN_STATUS';
export const GET_ROUTE_MENU = 'GET_ROUTE_MENU';

export const GET_TECH_REQUESTED_DETAIL = 'GET_TECH_REQUESTED_DETAIL';
export const GET_TECH_DETAIL_SUCCEED = 'GET_TECH_DETAIL_SUCCEED';
export const GET_TECH_DETAIL_FAILED = 'GET_TECH_DETAIL_FAILED';

export const ACTION_GET_TECH_Requested = (url) => {
  return {
    type: GET_TECH_REQUESTED,
    payload: url,
    isFetching: true
  };
};
export const ACTION_GET_TECH_Succeed = (response) => {
  return {
    type: GET_TECH_SUCCEED,
    response,
    isFetching: false
  };
};
export const ACTION_GET_TECH_FAILED = (error) => {
  return {
  type: GET_TECH_FAILED,
  error,
  isFetching: false
  };
};
export const ACTION_GET_ROUTE_TECH_MENU = (path) => {
  return {
  type: GET_ROUTE_MENU,
  path,
  };
};

export const ACTION_GET_TECH_REQUESTED_DETAIL = (url) => {
  return {
    type: GET_TECH_REQUESTED_DETAIL,
    payloadDetail: url,
    isFetching: true
  };
};
export const ACTION_GET_TECH_DETAIL_Succeed = (response) => {
  return {
    type: GET_TECH_DETAIL_SUCCEED,
    response,
    isFetching: false
  };
};
export const ACTION_GET_TECH_DETAIL_FAILED = (error) => ({
  type: GET_TECH_DETAIL_FAILED,
  error,
  isFetching: false
});