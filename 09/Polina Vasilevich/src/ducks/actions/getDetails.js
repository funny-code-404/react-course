import {
  GET_DETAILS_REQUESTED,
  GET_DETAILS_SUCCEED,
  GET_DETAILS_FAILED,
} from "../../constants/actionTypes";

const getDetailsRequested = () => ({
  type: GET_DETAILS_REQUESTED,
});

const getDetailsSucceed = (data) => ({
  type: GET_DETAILS_SUCCEED,
  payload: data,
});

const getDetailsFailed = (error) => ({
  type: GET_DETAILS_FAILED,
  payload: error,
});

export const ACTION_GET_DETAILS = (url, id) => async (dispatch) => {
  try {
    dispatch(getDetailsRequested());
    const res = await fetch(url + `/${id}`);
    const data = await res.json();

    dispatch(getDetailsSucceed(data));
  } catch (error) {
    dispatch(getDetailsFailed(error));
  }
};
