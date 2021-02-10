import { initialCivilizationsState } from '../ducks/civilizations';
import { initialUnitsState } from '../ducks/units';
import { initialStructuresState } from '../ducks/structures';
import { initialTechnologiesState } from '../ducks/technologies';

const initialState = {
    civilizations: initialCivilizationsState,
    units: initialUnitsState,
    structures: initialStructuresState,
    technologies: initialTechnologiesState,
};

export default initialState;