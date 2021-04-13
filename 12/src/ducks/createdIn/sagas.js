import { call, put, takeLatest } from "redux-saga/effects";

import { 
    GET_DATA_CREATEDIN_REQUSTED,
    getDataCreatedInSucceded,
    getDataCreatedInFailed,
 } from "./actions";

import { getCreatedInData } from "../../services/api/createdIn";

function* getCreatedInSaga({ path }) {
    try {
        const result = yield call(getCreatedInData, path);
        yield put(getDataCreatedInSucceded(result))
    } catch (error) {
        yield put(getDataCreatedInFailed(error))
    }
}

function* sreatedInSaga () {
    yield takeLatest(GET_DATA_CREATEDIN_REQUSTED, getCreatedInSaga)
}

export default sreatedInSaga;