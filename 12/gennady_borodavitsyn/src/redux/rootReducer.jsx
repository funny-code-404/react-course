import { combineReducers } from '@reduxjs/toolkit';
import toDosReducer from '../ducks/todos/todos';

const rootReducer = combineReducers({
  todos: toDosReducer,
});

export default rootReducer;
