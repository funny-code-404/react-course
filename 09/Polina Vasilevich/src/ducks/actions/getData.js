import {
  GET_DATA_REQUESTED,
  GET_DATA_SUCCEED,
  GET_DATA_FAILED,
} from "../../constants/actionTypes";

const getDataRequested = () => ({
  type: GET_DATA_REQUESTED,
});

const getDataSucceed = (data) => ({
  type: GET_DATA_SUCCEED,
  payload: {
    data,
  },
});

const getDataFailed = (error) => ({
  type: GET_DATA_FAILED,
  payload: {
    error,
  },
});

export const ACTION_GET_DATA = (url) => async (dispatch) => {
  try {
    dispatch(getDataRequested());
    const res = await fetch(url);
    const data = await res.json();

    dispatch(getDataSucceed(data));
  } catch (error) {
    dispatch(getDataFailed(error));
  }
};
