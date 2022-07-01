import { TInitialState } from "../../store/types";

export const searchBarSearchSelector = (state: TInitialState) => state.searchBar.search;
export const searchBarDateRangeSelector = (state: TInitialState) => state.searchBar.dateRange;
export const searchBarCounterPropertiesSelector = (state: TInitialState) => state.searchBar.counter.properties;
export const searchBarCounterStatesSelector = (state: TInitialState) => state.searchBar.counter.states;