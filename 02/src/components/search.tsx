import { useState, ChangeEvent } from 'react';
import { data } from '../data/data';
import { Hotelprops } from "../types/HotelProps"


const Search = () => {
    const [item, setItem] = useState(data);

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(data.filter((hotel) => hotel.name.includes(e.target.value))); 
    };

    return (
        <div className='search'>
            
            <input type="text" className='search__input' onChange={handelChange} placeholder='name' />
            <button className="search__button">Search</button>

            <ul className='search__ul'>
            {item.map((hotel: Hotelprops) =>(
                <li className='search__li' key={hotel.id}>
                    <img src={hotel.imageUrl} />
                    <h1> {hotel.name} </h1>
                    <p> {hotel.city} , {hotel.country}</p>
                
                </li>
            ))}
            </ul>

        </div>
    );
};

export default Search;