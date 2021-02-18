import { combineReducers } from 'redux';

import { fetchDataReducer } from '../ducks/fetchDataReducer/fetchDataReducer';
import { paginationsReducer } from '../ducks/paginationsReducer';

export const rootReducer = combineReducers({
    ageOfEmpires: fetchDataReducer,
    paginations: paginationsReducer
});