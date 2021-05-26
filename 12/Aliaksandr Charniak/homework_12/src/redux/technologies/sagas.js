import { takeLatest, put } from 'redux-saga/effects'
import {
  ACTION_GET_TECHNOLOGIES_SUCCEED,
  ACTION_GET_TECHNOLOGIES_FAILED,
  GET_TECHNOLOGIES_REQUESTED,
} from './actions'

import { URL } from '../../constantes'

function* getTechnologiesSaga(action) {
  let finishUrl = ''
  console.log(action.payload)
  if (action.payload) {
    finishUrl = action.payload
  } else {
    finishUrl = URL + '/technologies'
  }
  try {
    const response = yield fetch(finishUrl)
    const data = yield response.json()

    yield put(ACTION_GET_TECHNOLOGIES_SUCCEED(data))
  } catch (e) {
    yield put(ACTION_GET_TECHNOLOGIES_FAILED(e))
  }
}

export default function* technologiesSaga() {
  yield takeLatest(GET_TECHNOLOGIES_REQUESTED, getTechnologiesSaga)
}
