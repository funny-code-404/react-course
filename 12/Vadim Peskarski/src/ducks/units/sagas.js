import { put, takeEvery } from 'redux-saga/effects';
import {
  addUnitsSuccess,
  addUnitsError,
  ADD_UNITS_REQUESTED
} from './actions'

export function* addUnitsSaga({ payload }) {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(addUnitsSuccess(result));
  } catch (error) {
    put(addUnitsError(error));
  }
}

export function* watchUnitsSagas() {
  yield takeEvery(ADD_UNITS_REQUESTED, addUnitsSaga);
}
