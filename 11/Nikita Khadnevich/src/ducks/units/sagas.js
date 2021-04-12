import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_UNITS_REQUESTED,
  GET_UNITS_DETAIL_REQUESTED,
  ACTION_GET_UNITS_Succeed,
  ACTION_GET_UNITS_DETAIL_Succeed,
  ACTION_GET_UNITS_FAILED,
  ACTION_GET_UNITS_DETAIL_FAILED
} from './actions';
// import { API } from '../api';

export function* getUNITSaga({ payload }) {
  try {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const unit = yield fetch(`${proxy}${payload}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      );
    const res = yield unit.json();

    yield put(ACTION_GET_UNITS_Succeed(res));
  } catch (e) {
    yield put(ACTION_GET_UNITS_FAILED(e));
  }
}

export function* getDETAILSaga({ payload }) {
  try {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const unitDetail = yield fetch(`${proxy}${payload}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      );
    const res = yield unitDetail.json();

    yield put(ACTION_GET_UNITS_DETAIL_Succeed(res));
  } catch (e) {
    yield put(ACTION_GET_UNITS_DETAIL_FAILED(e));
  }
}

export function* watchUNITSaga() {
  yield takeLatest(GET_UNITS_REQUESTED, getUNITSaga);
}

export function* watchDETAILSaga() {
  yield takeLatest(GET_UNITS_DETAIL_REQUESTED, getDETAILSaga);
}
