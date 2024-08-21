import { ADULTS, CHILDREN, ROOMS } from "./actions";

type StateType = {
  adults: number;
  children: number;
  rooms: number;
};

type ActionType = {
  type: string;
  payload: {
    adults: number;
    children: number;
    rooms: number;
  };
};

export const initialFilterState = {
  adults: 2,
  children: 0,
  rooms: 1,
};

export const filterReducer = (
  state: StateType = initialFilterState,
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
