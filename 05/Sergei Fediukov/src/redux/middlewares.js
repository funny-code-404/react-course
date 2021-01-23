import { GET_DATA, GET_DETAILS, GET_UNIQUE_UNIT_DETAILS, GET_UNIQUE_TECH_DETAILS, GET_UNIQUE_CREATED_IN_DETAILS } from './actions';

import { getCivilizationsData } from '../ducks/civilizations';
import { getUnitsData } from '../ducks/units';
import { getStructuresData } from '../ducks/structures';
import { getTechnologiesData } from '../ducks/technologies';
import { getItemDetails } from '../ducks/item';

import { getUniqueUnitDetails } from '../ducks/uniqueUnit';
import { getUniqueTechDetails } from '../ducks/uniqueTech';
import { getUniqueCreatedInDetails } from '../ducks/uniqueCreatedIn';

import { paths } from '../config';

export const getDataMiddleware = store => next => action => {
    if (action.type === GET_DATA) {
        switch (action.path) {
            case paths.civilizations: return store.dispatch(getCivilizationsData(action.path))
            case paths.units: return store.dispatch(getUnitsData(action.path))
            case paths.structures: return store.dispatch(getStructuresData(action.path))
            case paths.technologies: return store.dispatch(getTechnologiesData(action.path))
        }
    }
    if (action.type === GET_DETAILS) {
        return store.dispatch(getItemDetails(action.path))
    }
    if (action.type === GET_UNIQUE_UNIT_DETAILS) {
        return store.dispatch(getUniqueUnitDetails(action.path))
    }
    if (action.type === GET_UNIQUE_TECH_DETAILS) {
        return store.dispatch(getUniqueTechDetails(action.path))
    }
    if (action.type === GET_UNIQUE_CREATED_IN_DETAILS) {
        return store.dispatch(getUniqueCreatedInDetails(action.path))
    }
    next(action);
};
