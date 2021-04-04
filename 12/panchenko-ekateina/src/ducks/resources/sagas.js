import { put, takeLatest } from "redux-saga/effects";
import {
  GET_RESOURCES_REQUESTED,
  getResourcesSucceed,
  getResourcesFailed,
} from "./actions";
import { API } from "../../api";

export function* getResourcesSaga({ payload }) {
  try {
    const data = yield API.get(payload);
    const { resources } = yield data.json();

    yield put(getResourcesSucceed(resources));
  } catch (e) {
    yield put(getResourcesFailed(e));
  }
}

export function* watchResourcesSaga() {
  yield takeLatest(GET_RESOURCES_REQUESTED, getResourcesSaga);
}
