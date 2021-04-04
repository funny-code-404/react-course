export const GET_RESOURCES_REQUESTED = "GET_RESOURCES_REQUESTED";
export const GET_RESOURCES_SUCCEED = "GET_RESOURCES_SUCCEED";
export const GET_RESOURCES_FAILED = "GET_RESOURCES_FAILED";

export const getResourcesRequested = (url) => {
  return {
    type: GET_RESOURCES_REQUESTED,
    payload: url,
  };
};

export const getResourcesSucceed = (response) => {
  return {
    type: GET_RESOURCES_SUCCEED,
    response,
  };
};

export const getResourcesFailed = (error) => ({
  type: GET_RESOURCES_FAILED,
  error,
});
