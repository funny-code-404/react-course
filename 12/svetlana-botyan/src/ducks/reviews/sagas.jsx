import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_REVIEWS_DATA_SUCCEED,
  REVIEWS_DATA_REQUESTED,
  REVIEWS_DATA_FAILED,
  ADD_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from './reviews';

import {
  getAllReviews,
  addReview,
  deleteReview,
  updateReview,
} from '../../services/api/reviewApi';

export function* getReviewsDataSaga(action) {
  try {
    const data = yield call(getAllReviews, action.payload);

    yield put(GET_REVIEWS_DATA_SUCCEED(data.reviews));
  } catch (e) {
    yield put(REVIEWS_DATA_FAILED(e));
  }
}

export function* addReviewSaga(action) {
  try {
    const data = yield call(addReview, action.payload);

    yield put(GET_REVIEWS_DATA_SUCCEED(data.reviews));
  } catch (e) {
    yield put(REVIEWS_DATA_FAILED(e));
  }
}

export function* deleteReviewSaga(action) {
  try {
    const data = yield call(deleteReview, action.payload);

    yield put(GET_REVIEWS_DATA_SUCCEED(data.reviews));
  } catch (e) {
    yield put(REVIEWS_DATA_FAILED(e));
  }
}

export function* updateReviewSaga(action) {
  try {
    const data = yield call(updateReview, action.payload);

    yield put(GET_REVIEWS_DATA_SUCCEED(data.reviews));
  } catch (e) {
    yield put(REVIEWS_DATA_FAILED(e));
  }
}

export function* reviewsSaga() {
  yield takeLatest(REVIEWS_DATA_REQUESTED, getReviewsDataSaga);
  yield takeLatest(ADD_REVIEW, addReviewSaga);
  yield takeLatest(DELETE_REVIEW, deleteReviewSaga);
  yield takeLatest(UPDATE_REVIEW, updateReviewSaga);
}
