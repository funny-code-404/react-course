import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_TODOS_REQUESTED,
  getTodosSucceed,
  getTodosFailed,
} from './actions';
// import { API } from '../api';

export function* getTodosSaga({ payload }) {
  console.log('saga');
  try {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const data = yield fetch(`${proxy}${payload}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      );
    const res = yield data.json();

    yield put(getTodosSucceed(res));
  } catch (e) {
    yield put(getTodosFailed(e));
  }
}

export function* watchTodosSaga() {
  yield takeLatest(GET_TODOS_REQUESTED, getTodosSaga);
}
