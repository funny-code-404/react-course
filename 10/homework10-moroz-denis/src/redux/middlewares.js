import { GET_DATA } from './actions';
import { getCivilizationsData } from '../ducks/civilizations';
import { getUnitsData } from '../ducks/units';
import { getStructuresData } from '../ducks/structures';
import { getTechnologiesData } from '../ducks/technologies';
import { paths } from '../config';

export const getDataMiddleware = store => next => action => {
    if(action.type === GET_DATA) {
        switch(action.path) {
            case paths.civilizations.listPath: return store.dispatch(getCivilizationsData(action.path));
            case paths.units.listPath: return store.dispatch(getUnitsData(action.path));
            case paths.structures.listPath: return store.dispatch(getStructuresData(action.path));
            case paths.technologies.listPath: return store.dispatch(getTechnologiesData(action.path));
        }
    }

    next(action);
};