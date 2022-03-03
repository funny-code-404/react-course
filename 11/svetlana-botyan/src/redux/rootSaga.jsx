import { all } from 'redux-saga/effects';
import { usersSaga } from '../ducks/users/sagas';
import { postsSaga } from '../ducks/posts/sagas';
import { reviewsSaga } from '../ducks/reviews/sagas';

export function* rootSaga() {
  yield all([usersSaga(), postsSaga(), reviewsSaga()]);
}
