import { createStore, combineReducers, applyMiddleware } from 'redux'
import { rootReducer } from '../../redux/rootReducer'
import initialState from '../../redux/initialState'
import { getData, getDetails, getUniqueUnitDetails, getUniqueTechDetails, getUniqueCreatedInDetails } from '../../redux/actions'
import { getCivilizationsData } from '../../ducks/civilizations'
import { getUnitsData } from '../../ducks/units'
import { getStructuresData } from '../../ducks/structures'
import { getTechnologiesData } from '../../ducks/technologies'
import { middlewares } from '../../redux/index'
import { paths } from '../../config';

describe('Redux store integration tests', () => {
    let store;

    beforeEach(() => {
        store = createStore(
            combineReducers({ ...rootReducer }),
            initialState,
            applyMiddleware(...middlewares));
    });
    describe('*** action creators ***', () => {
        it('should return correct value', () => {
            store.dispatch(getCivilizationsData(paths.civilizations));
            expect(store.getState().civilizations.data.length).toBe(0)

            store.dispatch(getUnitsData(paths.units));
            expect(store.getState().units.data.length).toBe(0)

            store.dispatch(getStructuresData(paths.structures));
            expect(store.getState().structures.data.length).toBe(0)

            store.dispatch(getTechnologiesData(paths.technologies));
            expect(store.getState().technologies.data.length).toBe(0)
        })
    })
    describe('*** action creators ***', () => {
        it('should return correct value', () => {
            store.dispatch(getDetails(`${paths.civilization} / 1`));
            expect(store.getState().item.data.id).toBeFalsy()
        })
        it('should return correct value', () => {
            store.dispatch(getUniqueUnitDetails(`${paths.unit} / 1`));
            expect(store.getState().uniqueUnit.id).toBeFalsy()
        })
        it('should return correct value', () => {
            store.dispatch(getUniqueTechDetails(`${paths.technology} / 1`));
            expect(store.getState().uniqueTech.id).toBeFalsy()
        })
        it('should return correct value', () => {
            store.dispatch(getUniqueCreatedInDetails(`${paths.civilization} / 1`));
            expect(store.getState().uniqueCreatedIn.id).toBeFalsy()
        })
    })
})