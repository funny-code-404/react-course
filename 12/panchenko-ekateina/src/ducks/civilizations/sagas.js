import { put, takeLatest } from "redux-saga/effects";
import {
  GET_CIVILIZATIONS_REQUESTED,
  getCivilizationsSucceed,
  getCivilizationsFailed,
} from "./actions";
import { API } from "../../api";

export function* getCivilizationsSaga({ payload }) {
  try {
    const data = yield API.get(payload);
    const { civilizations } = yield data.json();

    yield put(getCivilizationsSucceed(civilizations));
  } catch (e) {
    yield put(getCivilizationsFailed(e));
  }
}

export function* watchCivilizationsSaga() {
  yield takeLatest(GET_CIVILIZATIONS_REQUESTED, getCivilizationsSaga);
}
