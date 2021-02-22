import { takeLatest, call, put } from "redux-saga/effects";
import { getDetails } from '../api'
import {
    GET_UNIQUE_UNIT_DETAILS_REQUESTED,
} from '../ducks/uniqueUnit'
import {
    ACTION_GET_UNIQUE_UNIT_DETAILS_SUCCEEDED,
    ACTION_GET_UNIQUE_UNIT_DETAILS_FAILED,
} from '../redux/actions'

export function* getUniqueUnit_SagaWorker(path) {
    try {
        const data = yield call(getDetails, path);

        yield put(ACTION_GET_UNIQUE_UNIT_DETAILS_SUCCEEDED(data));
    } catch (error) {
        yield put(ACTION_GET_UNIQUE_UNIT_DETAILS_FAILED(error));
    }
};

export function* uniqueUnit_SagaWatcher() {
    yield takeLatest(GET_UNIQUE_UNIT_DETAILS_REQUESTED, getUniqueUnit_SagaWorker);
};

export default uniqueUnit_SagaWatcher;