import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import { HomesContent} from '../../data/data';
import {SearchList} from '../SearchList/SearchList';
import { SearchForm } from './SearchForm';

type Propes = {
    homes: HomesContent[];
}

export const SearchHomes = ({ homes}: Propes) => {
   
    return (
        <section>
             <div className="homes container">
                <h2 className="homes__title">Available hotels</h2>
            </div>
            <SearchList homes={homes}/>
        </section>
    );
};

export default SearchHomes;