import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_USERS_DATA_REQUESTED,
  ACTION_GET_USERS_DATA_SUCCEED,
  ACTION_GET_USERS_DATA_FAILED,
} from './actions';
import { getAllUsers } from '../../services/api/usersApi';

export function* getUsersDataSaga(action) {
  try {
    const data = yield call(getAllUsers, action.payload);
    console.log(data);

    yield put(ACTION_GET_USERS_DATA_SUCCEED(data));
  } catch (e) {
    yield put(ACTION_GET_USERS_DATA_FAILED(e));
  }
}

export function* usersSaga() {
  yield takeLatest(GET_USERS_DATA_REQUESTED, getUsersDataSaga);
}
