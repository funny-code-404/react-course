import { firebaseReducer } from 'react-redux-firebase'

import { civilizationsReducer } from '../ducks/civilizations';
import { unitsReducer } from '../ducks/units';
import { structuresReducer } from '../ducks/structures';
import { technologiesReducer } from '../ducks/technologies';

import { itemReducer } from '../ducks/item';
import { uniqueUnitReducer } from '../ducks/uniqueUnit';
import { uniqueTechReducer } from '../ducks/uniqueTech';
import { uniqueCreatedInReducer } from '../ducks/uniqueCreatedIn';


export const rootReducer = {
    civilizations: civilizationsReducer,
    units: unitsReducer,
    structures: structuresReducer,
    technologies: technologiesReducer,

    item: itemReducer,
    uniqueUnit: uniqueUnitReducer,
    uniqueTech: uniqueTechReducer,
    uniqueCreatedIn: uniqueCreatedInReducer,

    firebase: firebaseReducer
};
