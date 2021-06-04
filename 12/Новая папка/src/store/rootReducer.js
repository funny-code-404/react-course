import { combineReducers } from 'redux';
import  civilsReducer  from '../ducks/civils/reducer'

export const rootReducer = combineReducers({
  civils: civilsReducer,
});
