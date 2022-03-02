import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_ALBUMS_DATA_REQUESTED,
  ACTION_GET_ALBUMS_DATA_SUCCEED,
  ACTION_GET_ALBUMS_DATA_FAILED,
} from './actions';
import { getSomeAlbums } from '../../services/api/albumsApi';

export function* getAlbumsDataSaga() {
  try {
    const data = yield call(getSomeAlbums);

    yield put(ACTION_GET_ALBUMS_DATA_SUCCEED(data));
  } catch (error) {
    yield put(ACTION_GET_ALBUMS_DATA_FAILED(error));
  }
}

export function* albumsSaga() {
  yield takeLatest(GET_ALBUMS_DATA_REQUESTED, getAlbumsDataSaga);
}
