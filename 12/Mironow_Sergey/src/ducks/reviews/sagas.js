import { ACTION_DELETE_REVIEW, ACTION_REQUEST_FAILED, ACTION_REQUEST_REVIEWS, ACTION_SEND_REVIEW, ACTION_WRITE_REVIEWS } from "./reducer"
import { takeLatest, call, put } from 'redux-saga/effects'
import { deleteReview, getReviews, sendReview } from '../../services/reviewsAPI'

function* getReviewsSaga(action){
    try {
        const reviews = yield call(getReviews, action.payload)
        yield put(ACTION_WRITE_REVIEWS(reviews))
    } catch (err) {
        yield put(ACTION_REQUEST_FAILED(err))
    }
}

function* sendReviewSaga(action){
    try {
        const response = yield call(sendReview, action.payload)
        yield put(ACTION_REQUEST_REVIEWS())
    } catch (err) {
        alert(err)
    }
}

function* deleteReviewSaga(action){
    try {
        const response = yield call(deleteReview, action.payload)
        yield put(ACTION_REQUEST_REVIEWS())
    } catch (err) {
        alert(err)
    }
}

export const reviewsSaga = function* (){
    yield takeLatest(ACTION_REQUEST_REVIEWS, getReviewsSaga)
    yield takeLatest(ACTION_SEND_REVIEW, sendReviewSaga)
    yield takeLatest(ACTION_DELETE_REVIEW, deleteReviewSaga)
}