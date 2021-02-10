import { call, put, takeLatest } from "redux-saga/effects";

import { getUniqueTechData } from "../../services/api/uniqueTech";
import { 
	GET_DATA_UNIQUETECH_REQUSTED,
	getDataUniqueTechSucceded,
	getDataUniqueTechFailed
 } from "./actions";

function* getUniqueTechSaga({ path }) {
	try {
		const result = yield call(getUniqueTechData, path);
		yield put(getDataUniqueTechSucceded(result))
	} catch (error) {
		yield put(getDataUniqueTechFailed(error))
	}
}

function* UniqueTechSaga() {
	yield takeLatest(GET_DATA_UNIQUETECH_REQUSTED, getUniqueTechSaga)
}

export default UniqueTechSaga;