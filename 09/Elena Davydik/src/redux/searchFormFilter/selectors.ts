import { FilterStatesType } from "./types";

export const adultsSelector = (state: FilterStatesType) => state.filter.adults;
export const childrenSelector = (state: FilterStatesType) =>
  state.filter.children;
export const roomsSelector = (state: FilterStatesType) => state.filter.rooms;
