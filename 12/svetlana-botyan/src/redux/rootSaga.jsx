import { all } from 'redux-saga/effects';
import { reviewsSaga } from '../ducks/reviews/sagas';

export function* rootSaga() {
  yield all([reviewsSaga()]);
}
