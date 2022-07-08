// import { SearchSectionTypeAction } from './actions'


export type AdultsType = { adults: number };
export type ChildrenType = { children: string[] };
export type RoomsType = { rooms: number };

export type SearchSectionProperties = AdultsType & ChildrenType & RoomsType;
export type DateType = Date | null;




export type SearchSectionProperty = AdultsType | ChildrenType | RoomsType;


export type CounterState = {
    isModalOpen: boolean,
}

export type SearchAction = {
  type: string,
  payload: CounterState | string | DateType | SearchSectionProperty,
};

export type SearchState = {
  search: string;
  adults: number,
  children: string[],
  rooms: number,
  dateFrom: DateType,
  dateTo: DateType,
  // counter: {
  //   properties: SearchSectionProperties,
  //   states: CounterState,
  // }
};


