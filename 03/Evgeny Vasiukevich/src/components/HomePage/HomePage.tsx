import React, { ChangeEvent, MouseEvent } from 'react';
import SearchForm from '../UI/SearchForm/SearchForm';

type TChangeEvent = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onRender: (event: MouseEvent<HTMLButtonElement>) => void,
}

const HomePage = ({onChange, onRender}: TChangeEvent) => {
    return (
        <header className='home-page'>
            <div className='container home-page__container'>
                <SearchForm onChange={onChange} onRender={onRender} />
            </div>
        </header>
    );
};

export default HomePage;