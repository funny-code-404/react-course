import { call, put, takeLatest } from "redux-saga/effects";

import { getTechnologiesData } from "../../services/api/technologies";
import { 
	GET_DATA_TECHNOLOGIES_REQUSTED,
	getDataTechnologiesSucceded,
	getDataTechnologiesFailed
 } from "./actions";

function* getTechnologiesSaga({ path }) {
	try {
		const result = yield call(getTechnologiesData, path);
		yield put(getDataTechnologiesSucceded(result))
	} catch (error) {
		yield put(getDataTechnologiesFailed(error))
	}
}

function* technologiesSaga() {
	yield takeLatest(GET_DATA_TECHNOLOGIES_REQUSTED, getTechnologiesSaga)
}

export default technologiesSaga;