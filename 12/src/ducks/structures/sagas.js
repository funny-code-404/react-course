import { call, put, takeLatest } from "redux-saga/effects";

import { getStructuresData } from "../../services/api/structures";
import { 
    GET_DATA_STRUCTURES_REQUSTED,
    getDataStructuresSucceded,
    getDataStructuresFailed
} from "./actions";

function* getStructuresSaga({ path }) {
    try {
        const resault = yield call(getStructuresData, path);
        yield put(getDataStructuresSucceded(resault))
    } catch (error) {
        yield put(getDataStructuresFailed(error))
    }
}

function* structuresSaga () {
    yield takeLatest(GET_DATA_STRUCTURES_REQUSTED, getStructuresSaga)
}

export default structuresSaga;