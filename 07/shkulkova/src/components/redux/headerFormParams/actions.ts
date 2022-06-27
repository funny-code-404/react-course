export const ADULTS = "ADULTS";
export const CHILDREN = "CHILDREN";
export const ROOMS = "ROOMS";

type paramsType = {
  type: typeof ADULTS | typeof CHILDREN | typeof ROOMS;
  payload: number;
};

export const filterAdultsAction = (adults: number): paramsType => ({
  type: ADULTS,
  payload: adults,
});

export const filterChildrenAction = (children: number): paramsType => ({
  type: CHILDREN,
  payload: children,
});

export const filterRoomsAction = (rooms: number): paramsType => ({
  type: ROOMS,
  payload: rooms,
});

