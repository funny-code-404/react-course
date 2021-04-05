import { put, takeLatest } from "redux-saga/effects";
import {
  GET_UNITS_REQUESTED,
  getUnitsSucceed,
  getUnitsFailed,
} from "./actions";
import { API } from "../../api";

export function* getUnitsSaga({ payload }) {
  try {
    const data = yield API.get(payload);
    const { units } = yield data.json();

    yield put(getUnitsSucceed(units));
  } catch (e) {
    yield put(getUnitsFailed(e));
  }
}

export function* watchUnitsSaga() {
  yield takeLatest(GET_UNITS_REQUESTED, getUnitsSaga);
}
