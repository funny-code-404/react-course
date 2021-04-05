import {
  initialResourcesState,
  initialCivilizationsState,
  initialUnitsState,
  initialStructuresState,
  initialTechnologiesState,
} from "../ducks/reducers";

export const initialState = {
  resources: initialResourcesState,
  civilizations: initialCivilizationsState,
  units: initialUnitsState,
  structures: initialStructuresState,
  technologies: initialTechnologiesState,
};
