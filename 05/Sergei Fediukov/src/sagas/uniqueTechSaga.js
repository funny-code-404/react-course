import { takeLatest, call, put } from "redux-saga/effects";
import { getDetails } from '../api'
import {
    GET_UNIQUE_TECH_DETAILS_REQUESTED,
} from '../ducks/uniqueTech'
import {
    ACTION_GET_UNIQUE_TECH_DETAILS_SUCCEEDED,
    ACTION_GET_UNIQUE_TECH_DETAILS_FAILED,
} from '../redux/actions'

export function* getUniqueTech_SagaWorker(path) {
    try {
        const data = yield call(getDetails, path);

        yield put(ACTION_GET_UNIQUE_TECH_DETAILS_SUCCEEDED(data));
    } catch (error) {
        yield put(ACTION_GET_UNIQUE_TECH_DETAILS_FAILED(error));
    }
};

export function* uniqueTech_SagaWatcher() {
    yield takeLatest(GET_UNIQUE_TECH_DETAILS_REQUESTED, getUniqueTech_SagaWorker);
};

export default uniqueTech_SagaWatcher;