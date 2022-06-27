import { ADULTS, CHILDREN, ROOMS } from "./actions";

type StateType = {
  adults: number;
  children: number;
  rooms: number;
};

type ActionType = {
  type: string;
  payload: number;
};

export const initialParamsState = {
  adults: 0,
  children: 0,
  rooms: 1,
};

export const FilterReducer = (
  state: StateType = initialParamsState,
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
