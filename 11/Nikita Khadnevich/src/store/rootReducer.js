import { combineReducers } from 'redux';
import { todos } from '../ducks/todos/reducer';

export default combineReducers({
  todos,
});
