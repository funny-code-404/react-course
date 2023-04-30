import { REQUEST_AVAILABLE_HOTELS } from "./types";
import {
  actionGetAvailableHotelsSucceed,
  actionGetAvailableHotelsFailed,
} from "./actions";
import store from "../../store/store";
import { takeLatest, put } from "redux-saga/effects";

function* getAvailableHotelsSaga() {
  const { url } = store.getState().availableHotels;

  try {
    const response = yield fetch(url);
    const data = yield response.json();
    yield put(actionGetAvailableHotelsSucceed(data));
  } catch (error) {
    yield put(actionGetAvailableHotelsFailed(error.message));
  }
}

export function* watchAvailableHotelsSaga() {
  yield takeLatest(REQUEST_AVAILABLE_HOTELS, getAvailableHotelsSaga);
}
