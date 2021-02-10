import { takeLatest, call, put } from "redux-saga/effects";
import { getDetails } from '../api'
import {
    GET_ITEM_DETAILS_REQUESTED
} from '../ducks/item';
import {
    ACTION_GET_ITEM_DETAILS_SUCCEEDED,
    ACTION_GET_ITEM_DETAILS_FAILED,
} from '../redux/actions'

export function* getItem_SagaWorker(path) {
    try {
        const data = yield call(getDetails, path);

        yield put(ACTION_GET_ITEM_DETAILS_SUCCEEDED(data));
    } catch (error) {
        yield put(ACTION_GET_ITEM_DETAILS_FAILED(error));
    }
};

export function* item_SagaWatcher() {
    yield takeLatest(GET_ITEM_DETAILS_REQUESTED, getItem_SagaWorker);
};

export default item_SagaWatcher;