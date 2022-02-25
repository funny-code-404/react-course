import { all } from 'redux-saga/effects';
import { todosSaga } from '../ducks/todos/sagas';

export function* rootSaga() {
  yield all([todosSaga()]);
}
