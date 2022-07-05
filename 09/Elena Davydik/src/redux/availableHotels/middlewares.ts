import {
  actionGetAvailableHotelsRequested,
  actionGetAvailableHotelsSucceed,
  actionGetAvailableHotelsFailed,
} from "./actions";

export const getAvailableHotelsData =
  (url: string) => async (dispatch: any) => {
    dispatch(actionGetAvailableHotelsRequested());
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(actionGetAvailableHotelsSucceed(data));
    } catch (error: any) {
      dispatch(actionGetAvailableHotelsFailed(error));
    }
  };
