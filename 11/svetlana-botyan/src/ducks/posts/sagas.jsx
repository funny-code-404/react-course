import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_POSTS_DATA_REQUESTED,
  ACTION_GET_POSTS_DATA_SACCEED,
  ACTION_GET_POSTS_DATA_FAILED,
} from './actions';
import { getAllPosts } from '../../services/api/postsApi';

export function* getPostsDataSaga(action) {
  try {
    const arr = yield call(getAllPosts, action.payload);
    const data = arr.slice(0, 10);

    yield put(ACTION_GET_POSTS_DATA_SACCEED(data));
  } catch (e) {
    yield put(ACTION_GET_POSTS_DATA_FAILED(e));
  }
}

export function* postsSaga() {
  yield takeLatest(GET_POSTS_DATA_REQUESTED, getPostsDataSaga);
}
