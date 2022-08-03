export type AvailableHotelsParamsType = {
  search: string;
  adults: number;
  children: string;
  rooms: number;
  dateFrom: Date | null;
  dateTo: Date | null;
};