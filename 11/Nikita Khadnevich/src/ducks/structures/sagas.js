import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_STRU_REQUESTED,
  GET_STRU_DETAIL_REQUESTED,
  ACTION_GET_STRU_Succeed,
  ACTION_GET_STRU_DETAIL_Succeed,
  ACTION_GET_STRU_FAILED,
  ACTION_GET_STRU_DETAIL_FAILED
} from './actions';
// import { API } from '../api';

export function* getSTRUSaga({ payload }) {
  try {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const stru = yield fetch(`${proxy}${payload}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      );
    const res = yield stru.json();

    yield put(ACTION_GET_STRU_Succeed(res));
  } catch (e) {
    yield put(ACTION_GET_STRU_FAILED(e));
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

    yield put(ACTION_GET_STRU_DETAIL_Succeed(res));
  } catch (e) {
    yield put(ACTION_GET_STRU_DETAIL_FAILED(e));
  }
}

export function* watchSTRUSaga() {
  yield takeLatest(GET_STRU_REQUESTED, getSTRUSaga);
}

export function* watchStruDETAILSaga() {
  yield takeLatest(GET_STRU_DETAIL_REQUESTED, getDETAILSaga);
}
