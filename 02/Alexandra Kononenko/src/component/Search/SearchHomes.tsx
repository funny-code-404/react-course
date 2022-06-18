import {ChangeEvent, FormEvent, useState} from 'react';
import { HomesContent} from '../../data/data';
import {SearchList} from '../SearchList/SearchList';

type Propes = {
    homes: HomesContent[];
}

export const SearchHomes = ({ homes}: Propes) => {
   
    const [data, filterData] = useState(homes);

    const onChange = (event: ChangeEvent<HTMLInputElement>):void => {
        filterData((homes.filter((home: { name: string }) => home.name.toLowerCase().includes(event.target.value.trim().toLowerCase()))))
    }
   
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return (
        <section>
             <header className="header">
                <h1 className="search__title">Available hotels</h1>
                <form className= "search__form" onSubmit={handleSubmit}>
                    <input className="search__input" onChange={onChange} type="text" placeholder="Search hotels"/>
                    <button className="search__button"></button>
                </form>
            </header>
            <SearchList homes={data}/>
        </section>
    );
};

export default SearchHomes;