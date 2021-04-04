export const GET_CIVILIZATIONS_REQUESTED = "GET_CIVILIZATIONS_REQUESTED";
export const GET_CIVILIZATIONS_SUCCEED = "GET_CIVILIZATIONS_SUCCEED";
export const GET_CIVILIZATIONS_FAILED = "GET_CIVILIZATIONS_FAILED";

export const getCivilizationsRequested = (url) => {
  return {
    type: GET_CIVILIZATIONS_REQUESTED,
    payload: url,
  };
};

export const getCivilizationsSucceed = (response) => {
  return {
    type: GET_CIVILIZATIONS_SUCCEED,
    response,
  };
};

export const getCivilizationsFailed = (error) => ({
  type: GET_CIVILIZATIONS_FAILED,
  error,
});
