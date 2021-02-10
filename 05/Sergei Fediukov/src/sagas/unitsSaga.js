import { takeLatest, call, put, select } from "redux-saga/effects";
import { getData } from '../api'
import {
    GET_UNITS_DATA_REQUESTED
} from '../ducks/units'
import {
    ACTION_GET_UNITS_DATA_SUCCEEDED,
    ACTION_GET_UNITS_DATA_FAILED,
} from '../redux/actions'

export const getUnitsFromState = (state) => state.units.data


export function* getUnits_SagaWorker(path) {

    const units = yield select(getUnitsFromState);

    if (!Boolean(units.length)) {
        try {
            const data = yield call(getData, path);
            yield put(ACTION_GET_UNITS_DATA_SUCCEEDED(data));
        } catch (error) {
            yield put(ACTION_GET_UNITS_DATA_FAILED(error));
        }
    }
    else {
        yield put(ACTION_GET_UNITS_DATA_SUCCEEDED(units));

    }
};

export function* units_SagaWatcher() {
    yield takeLatest(GET_UNITS_DATA_REQUESTED, getUnits_SagaWorker);
};

export default units_SagaWatcher;