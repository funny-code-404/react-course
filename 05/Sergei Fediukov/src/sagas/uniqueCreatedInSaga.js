import { takeLatest, call, put } from "redux-saga/effects";
import { getDetails } from '../api'
import {
    GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED
} from '../ducks/uniqueCreatedIn';
import {
    ACTION_GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED,
    ACTION_GET_UNIQUE_CREATED_IN_DETAILS_FAILED,
} from '../redux/actions'

export function* getUniqueCreatedIn_SagaWorker(path) {
    try {
        const data = yield call(getDetails, path);

        yield put(ACTION_GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED(data));
    } catch (error) {
        yield put(ACTION_GET_UNIQUE_CREATED_IN_DETAILS_FAILED(error));
    }
};

export function* uniqueCreatedIn_SagaWatcher() {
    yield takeLatest(GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED, getUniqueCreatedIn_SagaWorker);
};

export default uniqueCreatedIn_SagaWatcher;