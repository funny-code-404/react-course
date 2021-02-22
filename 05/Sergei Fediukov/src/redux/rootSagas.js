import { all } from 'redux-saga/effects';
import civilizations_SagaWatcher from '../sagas/civilzationsSaga';
import units_SagaWatcher from '../sagas/unitsSaga';
import structures_SagaWatcher from '../sagas/structuresSaga';
import technologies_SagaWatcher from '../sagas/technologiesSaga';
import item_SagaWatcher from '../sagas/itemSaga';
import uniqueTech_SagaWatcher from '../sagas/uniqueTechSaga';
import uniqueUnit_SagaWatcher from '../sagas/uniqueUnitSaga';
import uniqueCreatedIn_SagaWatcher from '../sagas/uniqueCreatedInSaga';

export default function* rootsaga() {
    yield all([
        civilizations_SagaWatcher(),
        units_SagaWatcher(),
        structures_SagaWatcher(),
        technologies_SagaWatcher(),
        item_SagaWatcher(),
        uniqueTech_SagaWatcher(),
        uniqueUnit_SagaWatcher(),
        uniqueCreatedIn_SagaWatcher(),
    ])
}