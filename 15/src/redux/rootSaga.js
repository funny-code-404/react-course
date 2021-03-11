import { all } from 'redux-saga/effects';

import { watchGetData } from '../ducks/fetchDataReducer/sagas';

function* rootSaga() {
    yield all([
        watchGetData(),
    ]);
};


export default rootSaga;