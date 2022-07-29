import { ChangeEvent, LegacyRef, MouseEvent } from "react";

export type THotel = {
    id: string,
    name: string,
    city: string,
    country: string,
    imageUrl: string,
};

type TStyles = {
    borderStyle: string, 
    childWrapper: number,
}

export type TDatePicker = {
    startDate: Date | null,
    endDate: Date | null,
    handleSetDateRange: (date: Array<Date | null>) => void,
    handleCalendarClose: () => void,
    handleCalendarOpen: ({borderStyle, childWrapper}: TStyles) => () => void,
}

export type TAdults = { adults: number };
export type TChildren = { children: string[] };
export type TRooms = { rooms: number };

export type TStateCounter = TAdults & TChildren & TRooms;

export type TCounter = 'adults' | 'children' | 'rooms';

export type TSearchContext = {
    searchValue: string, 
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void, 
    handleRender: (event: MouseEvent<HTMLButtonElement>) => void, 
    searchRef: LegacyRef<HTMLDivElement>, 
    hotels: THotel[],
};

// Type for request params of available hotels
export type TAvailableHotelsParams = {
    search: string,
    dateFrom: Date | null,
    dateTo: Date | null,
    adults: number,
    children: string,
    rooms: number,
};