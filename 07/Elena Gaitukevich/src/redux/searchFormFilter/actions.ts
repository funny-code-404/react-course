export const ADULTS = "ADULTS";
export const CHILDREN = "CHILDREN";
export const ROOMS = "ROOMS";

type filterType = {
  type: typeof ADULTS | typeof CHILDREN | typeof ROOMS;
  payload: number;
};

export const adultsFilterAction = (adults: number): filterType => ({
  type: ADULTS,
  payload: adults,
});

export const childrenFilterAction = (children: number): filterType => ({
  type: CHILDREN,
  payload: children,
});

export const roomsFilterAction = (rooms: number): filterType => ({
  type: ROOMS,
  payload: rooms,
});
