export const GET_TECHNOLOGIES_REQUESTED = "GET_TECHNOLOGIES_REQUESTED";
export const GET_TECHNOLOGIES_SUCCEED = "GET_TECHNOLOGIES_SUCCEED";
export const GET_TECHNOLOGIES_FAILED = "GET_TECHNOLOGIES_FAILED";

export const getTechnologiesRequested = (url) => {
  return {
    type: GET_TECHNOLOGIES_REQUESTED,
    payload: url,
  };
};

export const getTechnologiesSucceed = (response) => {
  return {
    type: GET_TECHNOLOGIES_SUCCEED,
    response,
  };
};

export const getTechnologiesFailed = (error) => ({
  type: GET_TECHNOLOGIES_FAILED,
  error,
});
