import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import ApiService from '../../API/ApiService';
import { THotel } from '../../types/types';
import { SearchContext } from './SearchContext';

type Props = {
    children: React.ReactNode,
}

export const SearchContextProvider = ({ children }: Props) => {
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState('');
    const [hotels, setHotels] = useState<THotel[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchHotels(search);
    }, [search]);

    async function fetchHotels(value: string) {
        const response = await ApiService.getHotels(value);
        setHotels(response.data);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setSearchValue(event.target.value);

    const handleRender = (): void => {
        setSearch(searchValue);
        setSearchValue('');
        searchRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <SearchContext.Provider value={{ searchValue, handleChange, handleRender, searchRef, hotels }} >
            { children }
        </SearchContext.Provider>
    );
};