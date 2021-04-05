export const GET_STRUCTURES_REQUESTED = "GET_STRUCTURES_REQUESTED";
export const GET_STRUCTURES_SUCCEED = "GET_STRUCTURES_SUCCEED";
export const GET_STRUCTURES_FAILED = "GET_STRUCTURES_FAILED";

export const getStructuresRequested = (url) => {
  return {
    type: GET_STRUCTURES_REQUESTED,
    payload: url,
  };
};

export const getStructuresSucceed = (response) => {
  return {
    type: GET_STRUCTURES_SUCCEED,
    response,
  };
};

export const getStructuresFailed = (error) => ({
  type: GET_STRUCTURES_FAILED,
  error,
});
