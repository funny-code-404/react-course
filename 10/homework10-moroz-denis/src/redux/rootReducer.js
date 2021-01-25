import { civilizationsReducer } from '../ducks/civilizations';
import { unitsReducer } from '../ducks/units';
import { structuresReducer } from '../ducks/structures';
import { technologiesReducer } from '../ducks/technologies';

const rootReducer = {
    civilizations: civilizationsReducer,
    units: unitsReducer,
    structures: structuresReducer,
    technologies: technologiesReducer,
}

export default rootReducer;