export const GET_UNITS_REQUESTED = "GET_UNITS_REQUESTED";
export const GET_UNITS_SUCCEED = "GET_UNITS_SUCCEED";
export const GET_UNITS_FAILED = "GET_UNITS_FAILED";

export const getUnitsRequested = (url) => {
  return {
    type: GET_UNITS_REQUESTED,
    payload: url,
  };
};

export const getUnitsSucceed = (response) => {
  return {
    type: GET_UNITS_SUCCEED,
    response,
  };
};

export const getUnitsFailed = (error) => ({
  type: GET_UNITS_FAILED,
  error,
});
