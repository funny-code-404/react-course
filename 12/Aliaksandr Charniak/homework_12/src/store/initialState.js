import { initialCivilizationsState } from '../redux/civilizations/reducer'
import { initialUnitsState } from '../redux/units/reducer'
import { initialStructuresState } from '../redux/structures/reducer'
import { initialTechnologiesState } from '../redux/technologies/reducer'

export const initialState = {
  civilizations: initialCivilizationsState,
  units: initialUnitsState,
  structures: initialStructuresState,
  technologies: initialTechnologiesState,
}
