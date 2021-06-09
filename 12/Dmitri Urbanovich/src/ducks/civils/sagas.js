import { takeLatest, put } from 'redux-saga/effects';

import { ACTION_GET_CIVILS_FAILED, ACTION_GET_CIVILS_SUCCEED, GET_CIVILS_REQUESTED } from './actions';

const url = 'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

function* getCivilsSaga(action) {
  try {
    const res = yield fetch(url);
    const data = yield res.json();

    yield put(ACTION_GET_CIVILS_SUCCEED(data));
  } catch (e) {
    yield put(ACTION_GET_CIVILS_FAILED(e));
  }
}

export default function* civilsSaga() {
  yield takeLatest(GET_CIVILS_REQUESTED, getCivilsSaga);
}
