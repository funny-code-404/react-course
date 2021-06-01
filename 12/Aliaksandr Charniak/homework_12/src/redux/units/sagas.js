import { takeLatest, put } from 'redux-saga/effects'
import { ACTION_GET_UNITS_SUCCEED, ACTION_GET_UNITS_FAILED, GET_UNITS_REQUESTED } from './actions'

import { URL } from '../../constantes'

function* getUnitsSaga(action) {
  let finishUrl = ''
  if (action.payload) {
    finishUrl = action.payload
  } else {
    finishUrl = URL + '/units'
  }
  try {
    const response = yield fetch(finishUrl)
    const data = yield response.json()

    yield put(ACTION_GET_UNITS_SUCCEED(data))
  } catch (e) {
    yield put(ACTION_GET_UNITS_FAILED(e))
  }
}

export default function* unitsSaga() {
  yield takeLatest(GET_UNITS_REQUESTED, getUnitsSaga)
}
