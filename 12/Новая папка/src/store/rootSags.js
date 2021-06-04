import { all } from 'redux-saga/effects';
import civilsSaga from '../ducks/civils/sagas';

export default function* rootSaga() {
  yield all([civilsSaga()]);
}
