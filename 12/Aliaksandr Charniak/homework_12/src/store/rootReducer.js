import { combineReducers } from 'redux'

import { civilizationsReducer } from '../redux/civilizations/reducer'
import { unitsReducer } from '../redux/units/reducer'
import { structuresReducer } from '../redux/structures/reducer'
import { technologiesReducer } from '../redux/technologies/reducer'

export const rootReducer = combineReducers({
  civilizations: civilizationsReducer,
  units: unitsReducer,
  structures: structuresReducer,
  technologies: technologiesReducer,
})
