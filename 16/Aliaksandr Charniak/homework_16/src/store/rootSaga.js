import { all } from 'redux-saga/effects'

import civilizationsSaga from '../redux/civilizations/sagas'
import unitsSaga from '../redux/units/sagas'
import structuresSaga from '../redux/structures/sagas'
import technologiesSaga from '../redux/technologies/sagas'

export default function* rootSaga() {
  yield all([civilizationsSaga(), unitsSaga(), structuresSaga(), technologiesSaga()])
}
