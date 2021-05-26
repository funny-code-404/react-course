import { takeLatest, put } from 'redux-saga/effects'
import {
  ACTION_GET_STRUCTURES_SUCCEED,
  ACTION_GET_STRUCTURES_FAILED,
  GET_STRUCTURES_REQUESTED,
} from './actions'

import { URL } from '../../constantes'

function* getStructuresSaga(action) {
  let finishUrl = ''
  console.log(action.payload)
  if (action.payload) {
    finishUrl = action.payload
  } else {
    finishUrl = URL + '/structures'
  }
  try {
    const response = yield fetch(finishUrl)
    const data = yield response.json()

    yield put(ACTION_GET_STRUCTURES_SUCCEED(data))
  } catch (e) {
    yield put(ACTION_GET_STRUCTURES_FAILED(e))
  }
}

export default function* structuresSaga() {
  yield takeLatest(GET_STRUCTURES_REQUESTED, getStructuresSaga)
}
