import { put, call, takeLatest } from "redux-saga/effects";

import { getUnitsData } from "../../services/api/units";
import { 
    GET_DATA_UNITS_REQUESTED,
    getDataUnitsSucceded,
    getDataUnitsFailed,
} from "./actions";

function* getUnitsSaga ({ path }) {
    try {
        const result = yield call(getUnitsData, path);
        yield put(getDataUnitsSucceded(result));
    } catch (error) {
        yield put(getDataUnitsFailed(error))
    }
}

function* unitsSaga () {
    yield takeLatest(GET_DATA_UNITS_REQUESTED, getUnitsSaga)
}

export default unitsSaga;