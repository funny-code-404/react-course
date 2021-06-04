import { takeLatest, put } from 'redux-saga/effects'
import {
  ACTION_GET_CIVILIZATIONS_SUCCEED,
  ACTION_GET_CIVILIZATIONS_FAILED,
  GET_CIVILIZATIONS_REQUESTED,
} from './actions'

import { URL } from '../../constantes'

function* getCivilizationsSaga(action) {
  let finishUrl = ''
  if (action.payload) {
    finishUrl = action.payload
  } else {
    finishUrl = URL + '/civilizations'
  }
  try {
    const response = yield fetch(finishUrl)
    const data = yield response.json()

    yield put(ACTION_GET_CIVILIZATIONS_SUCCEED(data))
  } catch (e) {
    yield put(ACTION_GET_CIVILIZATIONS_FAILED(e))
  }
}

export default function* civilizationsSaga() {
  yield takeLatest(GET_CIVILIZATIONS_REQUESTED, getCivilizationsSaga)
}
