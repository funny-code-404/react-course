import { put, takeLatest } from "redux-saga/effects";
import {
  GET_TECHNOLOGIES_REQUESTED,
  getTechnologiesSucceed,
  getTechnologiesFailed,
} from "./actions";
import { API } from "../../api";

export function* getTechnologiesSaga({ payload }) {
  try {
    const data = yield API.get(payload);
    const { technologies } = yield data.json();

    yield put(getTechnologiesSucceed(technologies));
  } catch (e) {
    yield put(getTechnologiesFailed(e));
  }
}

export function* watchTechnologiesSaga() {
  yield takeLatest(GET_TECHNOLOGIES_REQUESTED, getTechnologiesSaga);
}
