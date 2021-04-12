import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_CIVIL_REQUESTED,
  ACTION_GET_CIVIL_Succeed,
  ACTION_GET_CIVIL_FAILED,

  GET_CIVIL_REQUESTED_DETAIL,
  ACTION_GET_CIVIL_DETAIL_Succeed,
  ACTION_GET_CIVIL_DETAIL_FAILED
} from './actions';

const error = "Ошибка связи :("

const proxy = 'https://cors-anywhere.herokuapp.com/'

export function* getTodosSaga({ payload }) {
  console.log('saga');
  try {
    const data = yield fetch(`${proxy}${payload}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      );
    const res = yield data.json();

    yield put(ACTION_GET_CIVIL_Succeed(res));
  } catch (error) {
    error = new Error("Ошибка связи :(")
    yield put(ACTION_GET_CIVIL_FAILED(error.message));
  }
}

export function* getDetailSaga ( {payloadDetail} ) {
  try {
    const dataDetail = yield fetch(`${proxy}${payloadDetail}`,
    {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
    );
    const resDetail = yield dataDetail.json();
    yield put(ACTION_GET_CIVIL_DETAIL_Succeed(resDetail))
  } catch (error) {
    error = new Error("Ошибка связи :(")
    yield put(ACTION_GET_CIVIL_DETAIL_FAILED(error.message))
  }
}

export function* watchCivilSaga() {
  yield takeLatest(GET_CIVIL_REQUESTED, getTodosSaga);
}
export function* watchCivilDetailSaga() {
  yield takeLatest(GET_CIVIL_REQUESTED_DETAIL, getDetailSaga);
}
