import { takeLatest, call, put, select } from "redux-saga/effects";
import { getData } from '../api'
import {
    GET_CIVILIZATIONS_DATA_REQUESTED
} from '../ducks/civilizations';
import {
    ACTION_GET_CIVILIZATIONS_DATA_SUCCEEDED,
    ACTION_GET_CIVILIZATIONS_DATA_FAILED,
} from '../redux/actions'

export const getCivilizatioinsFromState = (state) => state.civilizations.data


export function* getCivilizations_SagaWorker(path) {

    const civilizations = yield select(getCivilizatioinsFromState);

    if (!Boolean(civilizations.length)) {
        try {
            const data = yield call(getData, path);
            yield put(ACTION_GET_CIVILIZATIONS_DATA_SUCCEEDED(data));
        } catch (error) {
            yield put(ACTION_GET_CIVILIZATIONS_DATA_FAILED(error));
        }
    }
    else {
        yield put(ACTION_GET_CIVILIZATIONS_DATA_SUCCEEDED(civilizations));

    }
};

export function* civilizations_SagaWatcher() {
    yield takeLatest(GET_CIVILIZATIONS_DATA_REQUESTED, getCivilizations_SagaWorker);
};

export default civilizations_SagaWatcher;