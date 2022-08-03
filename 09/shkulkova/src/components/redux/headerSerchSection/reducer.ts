import { SearchAction, SearchState } from "./types";
import { ADULTS, ROOMS, SEARCH, CHILDREN, DATE_FROM, DATE_TO } from "./actions";
import { type } from "os";

export const initialSearchSectionState = {
  search: "",
  dateFrom: null,
  dateTo: null,
    adults: 0,
   children: [],
  rooms: 1,
};

export const SearchSectionReducer = (
  state: SearchState = initialSearchSectionState,
  action: SearchAction
) => {

  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case ADULTS:
      return {
        ...state, adults: action.payload };
    case CHILDREN:
      return {
        ...state,
         children: action.payload };
    case ROOMS:
      return {
        ...state,
        rooms: action.payload };
    case DATE_FROM:
      return {
        ...state,
        dateFrom: { ...state.dateFrom, dateFrom: action.payload },
      };
    case DATE_TO:
      return {
        ...state,
        dateTo: { ...state.dateTo, dateTo: action.payload },
      };
      default:
        return state;
  }
};
