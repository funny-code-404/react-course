import { 
    call, 
    put, 
    takeEvery 
} from 'redux-saga/effects';

import { 
    ACTION_GET_DATA_FAILED, 
    ACTION_GET_DATA_SUCCEEDED, 
    GET_DATA_REQUESTED,
    GET_ADD_DATA_REQUESTED,
    ACTION_GET_ADD_DATA_SUCCEEDED
} from './actions';

import { getEmpiresData } from '../../services/api/ageOfEmpires';


export function* getEmpiresDataSaga({path}) {
    try {
        const data = yield call(getEmpiresData, path);
        yield put(ACTION_GET_DATA_SUCCEEDED(data));   
    } catch (error) {
        yield put(ACTION_GET_DATA_FAILED(error));
    }
};

export function* getEmpiresAddDataSaga({path}) {
    try {
        const data = yield call(getEmpiresData, path);
        yield put(ACTION_GET_ADD_DATA_SUCCEEDED(data));   
    } catch (error) {
        yield put(ACTION_GET_DATA_FAILED(error));
    }
};

export function* watchGetData() {
    yield takeEvery(GET_DATA_REQUESTED, getEmpiresDataSaga);
    yield takeEvery(GET_ADD_DATA_REQUESTED, getEmpiresAddDataSaga);
};