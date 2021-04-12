import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_TECH_REQUESTED,
  ACTION_GET_TECH_Succeed,
  ACTION_GET_TECH_FAILED,
  GET_TECH_REQUESTED_DETAIL,
  ACTION_GET_TECH_DETAIL_Succeed,
  ACTION_GET_TECH_DETAIL_FAILED
} from './actions';
// import { API } from '../api';

const getError = 'Ошибка запроса или данные не существуют :('

const proxy = 'https://cors-anywhere.herokuapp.com/'

export function* getTechSaga({ payload }) {
  try {
    const tech = yield fetch(`${proxy}${payload}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      );
    const res = yield tech.json();

    yield put(ACTION_GET_TECH_Succeed(res));
  } catch (getError) {
    yield put(ACTION_GET_TECH_FAILED('Ошибка запроса или данные не существуют :('));
  }
}

export function* getTechDetailSaga ( {payloadDetail} ) {
  try {
    const techDetail = yield fetch(`${proxy}${payloadDetail}`,
    {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
    );
    const resDetail = yield techDetail.json();
    yield put(ACTION_GET_TECH_DETAIL_Succeed(resDetail))
  } catch (getError) {
    yield put(ACTION_GET_TECH_DETAIL_FAILED('Ошибка запроса или данные не существуют :('))
  }
}

export function* watchTechSaga() {
  yield takeLatest(GET_TECH_REQUESTED, getTechSaga);
}
export function* watchTechDetailSaga() {
  yield takeLatest(GET_TECH_REQUESTED_DETAIL, getTechDetailSaga);
}
