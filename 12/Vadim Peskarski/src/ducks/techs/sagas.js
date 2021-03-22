import { put, takeEvery } from 'redux-saga/effects';
import {
  addTechsSuccess,
  addTechsError,
  ADD_TECHS_REQUESTED
} from './actions'

export function* addTechsSaga({ payload }) {
  try {
    const data = yield fetch(payload);
    const result = yield data.json();
    yield put(addTechsSuccess(result));
  } catch (error) {
    put(addTechsError(error));
  }
}

export function* watchTechsSagas() {
  yield takeEvery(ADD_TECHS_REQUESTED, addTechsSaga);
}
