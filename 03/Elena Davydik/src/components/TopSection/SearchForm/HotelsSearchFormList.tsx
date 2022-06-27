import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { THotel } from '../../Types/types';
import { HotelsSearchForm } from './HotelsSearchForm';
import { HotelsSearchList } from './HotelsSearchList';

export const urlSearchHotels = "https://fe-student-api.herokuapp.com/api/hotels?search=";

export const HotelsSearchFormList = () => {
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<THotel[]>([]);
    const [url, setUrl] = useState<string>('');
    const [isClickedSearch, setClickedSearch] = useState<boolean>(false);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setClickedSearch(false);
    }

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(result => setData(result))
    },[url])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUrl(urlSearchHotels + value);
        setClickedSearch(true);
    }

    if (isClickedSearch) { return (
        <div className='searchForm'>
            <HotelsSearchForm onSubmit={handleSubmit} onChange={handleChange} />
            <HotelsSearchList data={data} />
        </div>
    )} else { return (
        <div className='searchForm'>
            <HotelsSearchForm onSubmit={handleSubmit} onChange={handleChange} />
        </div>
    )} 
}