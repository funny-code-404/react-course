import {ChangeEvent, FormEvent, useState} from 'react';
import data, { HomesContent} from '../../data/data';
import {SearchList} from '../SearchList/SearchList';
import {Example} from '../Date/date';
type Props = {
    value: string; 
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

export const SearchForm = ({value, onChange}: Props) => {
   
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    };

    return (
        <form className= "search-form" onSubmit={handleSubmit}>
            <input className="search-form__input" value={value} onChange={onChange} type="text" placeholder="Where are you going?"/>
            <input className="search-form__date" type="text" ><Example /></input>
            <input className="search-form__ticket" type="text" />
            <button className="search-form__btn">Search</button>
        </form>
    )
};

export default SearchForm;