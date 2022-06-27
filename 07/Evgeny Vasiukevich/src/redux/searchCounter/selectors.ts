import { initalState } from "../../store/store";

export const searchCounterPropertiesSelector = (state: initalState) => state.searchCounter.properties;
export const searchCounterStatesSelector = (state: initalState) => state.searchCounter.states;