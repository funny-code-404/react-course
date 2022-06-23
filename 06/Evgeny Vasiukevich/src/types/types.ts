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

export type TStateCounter = {
    adults: number,
    children: number,
    rooms: number,
    agesChildren: string[],
}

export type TCounter = 'adults' | 'children' | 'rooms';

export type TSearchContext = {
    searchValue: string, 
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void, 
    handleRender: (event: MouseEvent<HTMLButtonElement>) => void, 
    searchRef: LegacyRef<HTMLDivElement>, 
    hotels: THotel[],
}