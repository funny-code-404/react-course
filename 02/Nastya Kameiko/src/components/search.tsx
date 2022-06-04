import { useState, ChangeEvent } from 'react';
import { data } from './data';
import '../styles/index.scss';

type Data = {
    id: string,
    name: string,
    city: string,
    country: string,
    imageUrl: string,
  };


const Search = () => {
    const [item, setItem] = useState(data);

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(data.filter((hotel) => hotel.name.includes(e.target.value))); 
    };

    return (
        <div className='search'>
            <input type="text" className='search__input' name='name' onChange={handelChange} placeholder='name' />

            <ul className='search__ul'>
            {item.map((hotel: Data) =>(
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