import { takeLatest, put, call } from 'redux-saga/effects';

import { getDogsData, getDogPhoto } from '../../services/api/dogs';

import {
    ACTION_GET_DOGS_DATA_SUCCEED,
    ACTION_GET_DOGS_DATA_FAILED,
    GET_DOGS_DATA_REQUEST,

    ACTION_GET_DOG_PHOTO_SUCCEED,
    ACTION_GET_DOG_PHOTO_FAILED,
    GET_DOG_PHOTO_REQUEST,
  } from './actions';

    function* getDogsSaga({ path }) {

        try {
            const result = yield call(getDogsData, path);
            yield put(ACTION_GET_DOGS_DATA_SUCCEED(result));
  
        } catch (error) {
            yield put(ACTION_GET_DOGS_DATA_FAILED(error));  
        };  
  };

  function*  getDogPhotoSaga ({ path }) {
      try {
        const result = yield call(getDogPhoto, path);
        yield put(ACTION_GET_DOG_PHOTO_SUCCEED(result));
      } catch (error) {
          yield put(ACTION_GET_DOG_PHOTO_FAILED(error));
      };
  }

  function* dogsSaga() {
      yield takeLatest(GET_DOGS_DATA_REQUEST, getDogsSaga);
      yield takeLatest(GET_DOG_PHOTO_REQUEST, getDogPhotoSaga)
  };

  export default dogsSaga;