import { initialCivilizationsState } from '../ducks/civilizations';
import { initialUnitsState } from '../ducks/units';
import { initialStructuresState } from '../ducks/structures';
import { initialTechnologiesState } from '../ducks/technologies';

import { initialItemDetailState } from '../ducks/item';
import { initialUniqueUnitState } from '../ducks/uniqueUnit';
import { initialUniqueTechState } from '../ducks/uniqueTech';
import { initialUniqueCreatedInState } from '../ducks/uniqueCreatedIn';


export default {
    civilizations: initialCivilizationsState,
    units: initialUnitsState,
    structures: initialStructuresState,
    technologies: initialTechnologiesState,

    item: initialItemDetailState,
    uniqueUnit: initialUniqueUnitState,
    uniqueTech: initialUniqueTechState,
    uniqueCreatedIn: initialUniqueCreatedInState,
};