import { combineReducers } from 'redux';
import { civilizations } from '../ducks/civilizations/reducer.js';
import { units } from '../ducks/units/reducer.js';
import { structures } from '../ducks/structures/reducer.js';
import { technologies } from '../ducks/techs/reducer.js';

export default combineReducers({
  civilizations,
  units,
  structures,
  technologies
});
