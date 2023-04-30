export const ADULTS = "ADULTS";
export const CHILDREN = "CHILDREN";
export const ROOMS = "ROOMS";

export type filterType = {
  type: typeof ADULTS | typeof CHILDREN | typeof ROOMS;
  payload: number;
};

export type FilterStatesType = {
  filter: FilterStateType;
};

export type FilterStateType = {
  adults: number;
  children: number;
  rooms: number;
};

export type ActionType = {
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
