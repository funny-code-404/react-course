const delimeter = "&";

export const getSearchParams = (
  value: string,
  dateFrom: string | undefined,
  dateTo: string | undefined,
  adults: number,
  children: number,
  rooms: number
) => {
  const queryParams = [
    `search=${value}`,
    `dateFrom=${dateFrom}`,
    `dateTo=${dateTo}`,
    `adults=${adults}`,
    `children=${children}`,
    `rooms=${rooms}`,
  ].join(delimeter);
  return queryParams;
};
