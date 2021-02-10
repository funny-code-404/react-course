import { combineReducers } from '@reduxjs/toolkit';
import calculatorReducer from '../ducks/calculator';

export const rootReducer = combineReducers({
    calculator: calculatorReducer,
});
export default rootReducer;