import { type } from "os";
import { TypeiInitialState } from "../../store/store";

export const searchSectionSearchSelector = (state: TypeiInitialState) =>
  state.searchSection.search;
export const searchSectionDateFromSelector = (state: TypeiInitialState) =>
  state.searchSection.dateFrom;
export const searchSectionDateToSelector = (state: TypeiInitialState) =>
  state.searchSection.dateTo;
export const searchSectionAdultsSelector = (
  state: TypeiInitialState
) => state.searchSection.adults;
export const searchSectionChildrenSelector = (
  state: TypeiInitialState
) => state.searchSection.children;
export const searchSectionRoomsSelector = (
  state: TypeiInitialState
) => state.searchSection.rooms;

