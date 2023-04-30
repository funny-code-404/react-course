import { REQUEST_HOTELS } from "./types";
import { actionGetHotelsSucceed, actionGetHotelsFailed } from "./actions";
import { urlPopularHotels } from "../../components/Main/PopularHotels/config";

import { takeLatest, put } from "redux-saga/effects";

function* getPopularHotelsSaga() {
  try {
    const response = yield fetch(urlPopularHotels);
    const data = yield response.json();
    yield put(actionGetHotelsSucceed(data));
  } catch (error) {
    yield put(actionGetHotelsFailed(error));
  }
}

export function* watchPopularHotelsSaga() {
  yield takeLatest(REQUEST_HOTELS, getPopularHotelsSaga);
}
