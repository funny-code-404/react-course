import { ChangeEvent, LegacyRef, MouseEvent } from "react";
import { HotelsTypesActions } from "../redux/Hotels/actions";

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

// Types for SearchCounter store
type TAdults = { adults: number };
type Children = { children: number };
type AgesChildren = { agesChildren: string[] };
type TChildren = Children & AgesChildren;
type TRooms = { rooms: number };

export type TCounterProperties = TAdults & TChildren & TRooms;
export type TCounterProperty = TAdults | Children | AgesChildren | TRooms;

export type TElemsState = {
    isModalOpen: boolean,
    isSelectAvailable: boolean,
    isSelectChange: boolean,
};

export type TSearchCounterState = {
    properties: TCounterProperties,
    states: TElemsState
};

// Types for Hotels store
export type THotelsActions = {
    type: HotelsTypesActions,
    payload: THotel[],
};

export type THotelsState = {
    allHotels: THotel[] | null,
    popularHotels: THotel[] | null,
    isLoading: boolean,
    error: null | Error,
    currentHotel: THotel | null,
}