import { takeLatest, call, put, select } from "redux-saga/effects";
import { getData } from '../api'
import {
    GET_TECHNOLOGIES_DATA_REQUESTED
} from '../ducks/technologies';
import {
    ACTION_GET_TECHNOLOGIES_DATA_SUCCEEDED,
    ACTION_GET_TECHNOLOGIES_DATA_FAILED,
} from '../redux/actions'

export const getTechnologiesFromState = (state) => state.technologies.data

export function* getTechnologies_SagaWorker(path) {

    const technologies = yield select(getTechnologiesFromState);

    if (!Boolean(technologies.length)) {
        try {
            const data = yield call(getData, path);
            yield put(ACTION_GET_TECHNOLOGIES_DATA_SUCCEEDED(data));
        } catch (error) {
            yield put(ACTION_GET_TECHNOLOGIES_DATA_FAILED(error));
        }
    }
    else {
        yield put(ACTION_GET_TECHNOLOGIES_DATA_SUCCEEDED(technologies));

    }
};

export function* technologies_SagaWatcher() {
    yield takeLatest(GET_TECHNOLOGIES_DATA_REQUESTED, getTechnologies_SagaWorker);
};

export default technologies_SagaWatcher;