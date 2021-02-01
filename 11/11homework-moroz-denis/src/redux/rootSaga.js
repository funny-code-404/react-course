import { all } from 'redux-saga/effects';
import dogsSaga from '../ducks/dogs/sagas';

export default function* rootSaga() {
    yield all([dogsSaga()]);
};