import { put, takeLatest } from "redux-saga/effects";
import {
  GET_STRUCTURES_REQUESTED,
  getStructuresSucceed,
  getStructuresFailed,
} from "./actions";
import { API } from "../../api";

export function* getStructuresSaga({ payload }) {
  try {
    const data = yield API.get(payload);
    const { structures } = yield data.json();

    yield put(getStructuresSucceed(structures));
  } catch (e) {
    yield put(getStructuresFailed(e));
  }
}

export function* watchStructuresSaga() {
  yield takeLatest(GET_STRUCTURES_REQUESTED, getStructuresSaga);
}
