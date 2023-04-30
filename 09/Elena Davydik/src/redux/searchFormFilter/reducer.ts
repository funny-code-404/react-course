import {
  ADULTS,
  CHILDREN,
  ROOMS,
  FilterStateType,
  initialFilterState,
  ActionType,
} from "./types";

export const FilterReducer = (
  state: FilterStateType = initialFilterState,
  action: ActionType
) => {
  switch (action.type) {
    case ADULTS:
      return {
        ...state,
        adults: action.payload,
      };
    case CHILDREN:
      return {
        ...state,
        children: action.payload,
      };
    case ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };
  }
  return state;
};
