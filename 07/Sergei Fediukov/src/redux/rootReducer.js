import { combineReducers } from '@reduxjs/toolkit';
import culcReducer from '../ducks/culc';

export const rootReducer = combineReducers({
    culc: culcReducer,
});
export default rootReducer;