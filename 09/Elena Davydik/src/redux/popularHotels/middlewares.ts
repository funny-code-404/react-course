import {
  actionGetHotelsRequested,
  actionGetHotelsSucceed,
  actionGetHotelsFailed,
} from "./actions";

export const getHotelsData = (url: string) => async (dispatch: any) => {
  dispatch(actionGetHotelsRequested());
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(actionGetHotelsSucceed(data));
  } catch (error: any) {
    dispatch(actionGetHotelsFailed(error));
  }
};
