import { takeLatest, call, put, select } from "redux-saga/effects";
import { getData } from '../api'
import {
    GET_STRUCTURES_DATA_REQUESTED
} from '../ducks/structures';
import {
    ACTION_GET_STRUCTURES_DATA_SUCCEEDED,
    ACTION_GET_STRUCTURES_DATA_FAILED,
} from '../redux/actions'

export const getStructuresFromState = (state) => state.civilizations.data;

export function* getStructures_SagaWorker(path) {

    const structures = yield select(getStructuresFromState);

    if (!Boolean(structures.length)) {
        try {
            const data = yield call(getData, path);

            yield put(ACTION_GET_STRUCTURES_DATA_SUCCEEDED(data));
        } catch (error) {
            yield put(ACTION_GET_STRUCTURES_DATA_FAILED(error));
        };
    }
    else {
        yield put(ACTION_GET_STRUCTURES_DATA_SUCCEEDED(structures));

    }
};

export function* structures_SagaWatcher() {
    yield takeLatest(GET_STRUCTURES_DATA_REQUESTED, getStructures_SagaWorker);
};

export default structures_SagaWatcher;