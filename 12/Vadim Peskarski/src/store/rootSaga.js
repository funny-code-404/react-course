import { all } from 'redux-saga/effects';

import { watchCivsSagas } from '../ducks/civilizations/sagas';
import { watchUnitsSagas } from '../ducks/units/sagas';
import { watchStructuresSagas } from '../ducks/structures/sagas';
import { watchTechsSagas } from '../ducks/techs/sagas';

export default function* rootSaga() {
  yield all([ watchCivsSagas(), watchUnitsSagas(), watchStructuresSagas(), watchTechsSagas() ])
};
