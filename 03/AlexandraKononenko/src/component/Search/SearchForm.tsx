import {ChangeEvent, FormEvent, useState} from 'react';
import data, { HomesContent} from '../../data/data';
import {SearchList} from '../SearchList/SearchList';

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
            <input className="search-form__input" value={value} onChange={onChange} type="text" placeholder="Search hotels"/>
            <input className="search-form__date" type="text" />
            <input className="search-form__ticket" type="text" />
            <button className="search-form__btn"></button>
        </form>
    )
};

export default SearchForm;