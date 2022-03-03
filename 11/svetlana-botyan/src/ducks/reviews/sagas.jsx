import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_REVIEWS_DATA_REQUESTED,
  ACTION_GET_REVIEWS_DATA_SACCEED,
  ACTION_GET_REVIEWS_DATA_FAILED,
} from './actions';
import { getAllReviews } from '../../services/api/reviewsApi';

export function* getReviewsDataSaga(action) {
  try {
    const arr = yield call(getAllReviews, action.payload);
    const data = arr.slice(0, 10);

    yield put(ACTION_GET_REVIEWS_DATA_SACCEED(data));
  } catch (e) {
    yield put(ACTION_GET_REVIEWS_DATA_FAILED(e));
  }
}

export function* reviewsSaga() {
  yield takeLatest(GET_REVIEWS_DATA_REQUESTED, getReviewsDataSaga);
}
