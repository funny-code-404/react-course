import { all } from "redux-saga/effects";
import {
  watchResourcesSaga,
  watchCivilizationsSaga,
  watchUnitsSaga,
  watchStructuresSaga,
  watchTechnologiesSaga,
} from "../ducks/sagas";

function* rootSaga() {
  yield all([
    watchResourcesSaga(),
    watchCivilizationsSaga(),
    watchUnitsSaga(),
    watchStructuresSaga(),
    watchTechnologiesSaga(),
  ]);
}

export default rootSaga;
