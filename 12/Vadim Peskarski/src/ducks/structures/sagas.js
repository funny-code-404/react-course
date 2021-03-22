import { put, takeEvery } from 'redux-saga/effects';
import {
  addStructuresSuccess,
  addStructuresError,
  ADD_STRUCTURES_REQUESTED
} from './actions'

export function* addStructuresSaga({ payload }) {
  try {
    console.log('saga');
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(addStructuresSuccess(result));
  } catch (error) {
    put(addStructuresError(error));
  }
}

export function* watchStructuresSagas() {
  yield takeEvery(ADD_STRUCTURES_REQUESTED, addStructuresSaga);
}
