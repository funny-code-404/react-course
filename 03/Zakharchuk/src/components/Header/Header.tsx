import React, {ChangeEvent, FormEvent, memo, useEffect, useState} from "react";
import { ErrorBlock } from "../ErrorBlock/ErrorBlock";
import { Hotels } from "../Hotel/Hotels";
import { fetchData } from "./fetchData";
import { buildUrl } from "./SearchForm/BuildUrl";
import { TopSection } from "./TopSection/TopSection";


export const Header = memo(() => {

const HotelsTitle = 'Available Hotels'

const [data, setData] = useState([]);
const [value, setValue] = useState ('');
const [error, setError] = useState ('');

useEffect (() => {
    fetchData(buildUrl(value), setData, setError)
},[]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (value.trim()) {

            fetchData(buildUrl(value), setData, setError)
            setValue('')
        } 
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }
    
    return (
        <header>
            <TopSection value={value} onChange={handleChange} onSubmit={handleSubmit}/>
            <Hotels title = {HotelsTitle} hotels = {data}/>
        </header>
    );
});

