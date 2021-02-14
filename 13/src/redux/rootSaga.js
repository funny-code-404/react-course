import { all } from "redux-saga/effects";

import civilizationsSaga from "../ducks/civilizations/sagas";
import structuresSaga from "../ducks/structures/sagas";
import unitsSaga from "../ducks/units/sagas";
import technologiesSaga from "../ducks/technologies/sagas";
import itemSaga from "../ducks/item/sagas";
import sreatedInSaga from "../ducks/createdIn/sagas";
import UniqueTechSaga from "../ducks/uniqueTech/sagas";
import UniqueUnitSaga from "../ducks/uniqueUnit/sagas";
import syncUserSaga from "../ducks/auth/sagas";
import signUpSaga from "../ducks/auth/signUp/sagas";
import LoginSaga from "../ducks/auth/login/sagas";

export default function* rootSaga() {
	yield all([
		civilizationsSaga(),
		unitsSaga(),
		structuresSaga(),
		technologiesSaga(),
		itemSaga(),
		sreatedInSaga(),
		UniqueTechSaga(),
		UniqueUnitSaga(),
		syncUserSaga(),
		signUpSaga(),
		LoginSaga(),
	])
}