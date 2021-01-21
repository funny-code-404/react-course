import { combineReducers } from "@reduxjs/toolkit";

import calculationsReducer from "../ducks/calculations";

export const rootReducer = combineReducers({
  calc: calculationsReducer,
});

export default rootReducer;
