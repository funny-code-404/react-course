import { createContext } from 'react';
import { TSearchContext } from '../../types/types';

const searchContextDefault = {
    searchValue: '', 
    handleChange: () => {}, 
    handleRender: () => {}, 
    searchRef: null, 
    hotels: [],
};

export const SearchContext = createContext<TSearchContext>(searchContextDefault);