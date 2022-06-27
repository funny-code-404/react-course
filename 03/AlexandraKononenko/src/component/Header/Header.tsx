import { Nav } from "./Nav";
import React, { ChangeEvent, MouseEvent } from 'react';
import SearchHomes from '../Search/SearchHomes';
import {data} from '../../data/data';
import SearchForm from '../Search/SearchForm'

type Props = {
    value: string; 
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

export const Header = ({value, onChange}: Props)  => {

    return (
        <header className="header">
            <Nav/>
            <h1>Discover stays to live, work or just relax</h1>
            <div className="form-text">
                <p className="form-text__desctiption">Your destination or hotel name</p>
                <p className="form-text__description">Check-in — Check-out</p>
            </div>
                <SearchForm value={value} onChange={onChange}/>
            <div className="header-btn">
                <button className="header-btn__gogle"></button>
                <button className="header-btn__app"></button>
            </div>
        </header>
    )
};