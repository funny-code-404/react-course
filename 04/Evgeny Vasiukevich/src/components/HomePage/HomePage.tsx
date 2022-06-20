import React, { ChangeEvent, MouseEvent } from 'react';
import Navbar from '../UI/Navbar/Navbar';
import SearchBar from '../UI/SearchBar/SearchBar';
import { StyledHeader, StyledTitle } from './styles';

type TChangeEvent = {
    searchValue: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onRender: (event: MouseEvent<HTMLButtonElement>) => void,
}

const HomePage = ({searchValue, onChange, onRender}: TChangeEvent) => {
    return (
        <StyledHeader className='home-page'>
            <div className='container home-page__container'>
                <Navbar/>
                <StyledTitle>Discover stays <span>to live, work or just relax</span></StyledTitle>
                <SearchBar searchValue={searchValue} onChange={onChange} onRender={onRender} />
            </div>
        </StyledHeader>
    );
};

export default HomePage;