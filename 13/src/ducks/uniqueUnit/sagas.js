import { call, put, takeLatest } from "redux-saga/effects";

import { getUniqueUnitData } from "../../services/api/uniqueUnit";
import { 
	GET_DATA_UNIQUEUNIT_REQUSTED,
	getDataUniqueUnitSucceded,
	getDataUniqueUnitFailed
 } from "./actions";

function* getUniqueUnitSaga({ path }) {
	try {
		const result = yield call(getUniqueUnitData, path);
		yield put(getDataUniqueUnitSucceded(result))
	} catch (error) {
		yield put(getDataUniqueUnitFailed(error))
	}
}

function* UniqueUnitSaga() {
	yield takeLatest(GET_DATA_UNIQUEUNIT_REQUSTED, getUniqueUnitSaga)
}

export default UniqueUnitSaga;