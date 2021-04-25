export const GET_UNITS_REQUESTED = 'GET_UNITS_REQUESTED';
export const GET_UNITS_SUCCEED = 'GET_UNITS_SUCCEED';
export const GET_UNITS_FAILED = 'GET_UNITS_FAILED';
export const GET_ROUTE_UNIT_MENU = 'GET_ROUTE_UNIT_MENU';

export const GET_UNITS_DETAIL_REQUESTED = 'GET_UNITS_DETAIL_REQUESTED';
export const GET_UNITS_DETAIL_SUCCEED = 'GET_UNITS_DETAIL_SUCCEED';
export const GET_UNITS_DETAIL_FAILED = 'GET_UNITS_DETAIL_FAILED';

export const ACTION_GET_UNIT_Requested = (url) => {
  return {
    type: GET_UNITS_REQUESTED,
    payload: url,
    isFetching: true
  };
};
export const ACTION_GET_UNITS_Succeed = (response) => {
  return {
    type: GET_UNITS_SUCCEED,
    response,
    isFetching: false
  };
};
export const ACTION_GET_UNITS_FAILED = (error) => {
  return {
  type: GET_UNITS_FAILED,
  error,
  isFetching: false
  };
};
export const ACTION_GET_ROUTE_UNIT_MENU = (path) => {
  return {
  type: GET_ROUTE_UNIT_MENU,
  path,
  }
};
export const ACTION_GET_UNIT_DETAIL_Requested = (url) => {
  return {
    type: GET_UNITS_DETAIL_REQUESTED,
    payload: url,
    isFetching: true
  }
}
export const ACTION_GET_UNITS_DETAIL_Succeed = (response) => {
  return {
    type: GET_UNITS_DETAIL_SUCCEED,
    response,
    isFetching: false
  };
};
export const ACTION_GET_UNITS_DETAIL_FAILED = (error) => {
  return {
    type: GET_UNITS_DETAIL_FAILED,
    error,
    isFetching: false
  };
};
