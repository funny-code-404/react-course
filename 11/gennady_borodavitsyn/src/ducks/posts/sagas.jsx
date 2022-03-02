import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_POSTS_DATA_REQUESTED,
  ACTION_GET_POSTS_DATA_SUCCEED,
  ACTION_GET_POSTS_DATA_FAILED,
} from './actions';
import { getSomePosts } from '../../services/api/postsApi';

export function* getPostsDataSaga() {
  try {
    const data = yield call(getSomePosts);

    yield put(ACTION_GET_POSTS_DATA_SUCCEED(data));
  } catch (error) {
    yield put(ACTION_GET_POSTS_DATA_FAILED(error));
  }
}

export function* postsSaga() {
  yield takeLatest(GET_POSTS_DATA_REQUESTED, getPostsDataSaga);
}
