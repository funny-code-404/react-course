import { combineReducers } from 'redux';
import { todos } from '../ducks/todos';
import { editing } from '../ducks/editing';

export default combineReducers({
    todos,
    editing,
});