import { combineReducers } from 'redux';
import { form } from '../ducks/form';
import { todo } from '../ducks/todo';

export default combineReducers({
  form,
  todo,
});