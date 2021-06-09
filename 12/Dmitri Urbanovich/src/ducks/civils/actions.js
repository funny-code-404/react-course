export const GET_CIVILS_REQUESTED = 'GET_CIVILS_REQUESTED';
export const GET_CIVILS_SUCCEED = 'GET_CIVILS_SUCCEED';
export const GET_CIVILS_FAILED = 'GET_CIVILS_FAILED';

export const ACTION_GET_CIVILS_REQUESTED = () => ({ type: GET_CIVILS_REQUESTED });
export const ACTION_GET_CIVILS_SUCCEED = data => ({ type: GET_CIVILS_SUCCEED, payload: data });
export const ACTION_GET_CIVILS_FAILED = error => ({ type: GET_CIVILS_FAILED, payload: error });
