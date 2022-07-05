import { filterType, ADULTS, CHILDREN, ROOMS } from "./types";

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
