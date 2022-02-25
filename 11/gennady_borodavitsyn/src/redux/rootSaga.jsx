import { all } from 'redux-saga/effects';
import { postsSaga } from '../ducks/posts/sagas';
import { albumsSaga } from '../ducks/albums/sagas';

export function* rootSaga() {
  yield all([postsSaga(), albumsSaga()]);
}
