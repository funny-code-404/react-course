import { put, takeEvery } from 'redux-saga/effects';
import {
  addCivsSuccess,
  addCivsError,
  ADD_CIVS_REQUESTED
} from './actions'

export function* addCivsSaga({ payload }) {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(addCivsSuccess(result));
  } catch (error) {
    put(addCivsError(error));
  }
}

export function* watchCivsSagas() {
  yield takeEvery(ADD_CIVS_REQUESTED, addCivsSaga);
}
