import { takeLatest } from 'redux-saga/effects';
import { civilizations_SagaWatcher, getCivilizations_SagaWorker } from '../civilzationsSaga';
import { structures_SagaWatcher, getStructures_SagaWorker } from '../structuresSaga';
import { technologies_SagaWatcher, getTechnologies_SagaWorker } from '../technologiesSaga';
import { units_SagaWatcher, getUnits_SagaWorker } from '../unitsSaga';
import { item_SagaWatcher, getItem_SagaWorker } from '../itemSaga';
import { uniqueCreatedIn_SagaWatcher, getUniqueCreatedIn_SagaWorker } from '../uniqueCreatedInSaga';
import { uniqueTech_SagaWatcher, getUniqueTech_SagaWorker } from '..//uniqueTechSaga';
import { uniqueUnit_SagaWatcher, getUniqueUnit_SagaWorker } from '../uniqueUnitSaga';

describe('civilizations_SagaWatcher', () => {
    const genObject = civilizations_SagaWatcher();

    it('should wait for every GET_CIVILIZATIONS_DATA_REQUESTED action and call getCivilizations_SagaWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('GET_CIVILIZATIONS_DATA_REQUESTED', getCivilizations_SagaWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
describe('structures_SagaWatcher', () => {
    const genObject = structures_SagaWatcher();

    it('should wait for every GET_STRUCTURES_DATA_REQUESTED action and call getStructures_SagaWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('GET_STRUCTURES_DATA_REQUESTED', getStructures_SagaWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
describe('technologies_SagaWatcher', () => {
    const genObject = technologies_SagaWatcher();

    it('should wait for every GET_TECHNOLOGIES_DATA_REQUESTED action and call getTechnologies_SagaWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('GET_TECHNOLOGIES_DATA_REQUESTED', getTechnologies_SagaWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
describe('units_SagaWatcher', () => {
    const genObject = units_SagaWatcher();

    it('should wait for every GET_UNITS_DATA_REQUESTED action and call getUnits_SagaWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('GET_UNITS_DATA_REQUESTED', getUnits_SagaWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
describe('item_SagaWatcher', () => {
    const genObject = item_SagaWatcher();

    it('should wait for every GET_ITEM_DETAILS_REQUESTED action and call getItem_SagaWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('GET_ITEM_DETAILS_REQUESTED', getItem_SagaWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
describe('uniqueCreatedIn_SagaWatcher', () => {
    const genObject = uniqueCreatedIn_SagaWatcher();

    it('should wait for every GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED action and call getUniqueCreatedIn_SagaWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED', getUniqueCreatedIn_SagaWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
describe('uniqueTech_SagaWatcher', () => {
    const genObject = uniqueTech_SagaWatcher();

    it('should wait for every GET_UNIQUE_TECH_DETAILS_REQUESTED action and call getUniqueTech_SagaWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('GET_UNIQUE_TECH_DETAILS_REQUESTED', getUniqueTech_SagaWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
describe('uniqueUnit_SagaWatcher', () => {
    const genObject = uniqueUnit_SagaWatcher();

    it('should wait for every GET_UNIQUE_UNIT_DETAILS_REQUESTED action and call getUniqueUnit_SagaWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeLatest('GET_UNIQUE_UNIT_DETAILS_REQUESTED', getUniqueUnit_SagaWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});