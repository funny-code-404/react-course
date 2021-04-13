import { takeLatest, call, put } from "redux-saga/effects";

import { getCivilizationsData } from "../../services/api/civilizations";
import { 
	GET_DATA_CIVILIZATIONS_REQUESTED,
	getDataCivilizationsSucceded,
	getDataCivilizationsFailed,
 } from "./actions";

function* getCivilizationsSaga ({ path }) {
	try {
		const result = yield call(getCivilizationsData, path)
		yield put(getDataCivilizationsSucceded(result))
	} catch (error) {
		yield put(getDataCivilizationsFailed(error))
	}
}

function* civilizationsSaga () {
	yield takeLatest(GET_DATA_CIVILIZATIONS_REQUESTED , getCivilizationsSaga)
}

export default civilizationsSaga;