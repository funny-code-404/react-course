import { ChangeEvent, useState } from 'react';
import { data } from '../Hotels/data';
import { HotelsSearchForm } from '../HotelsSearchForm';
import { HotelsSearchList } from '../HotelsSearchList';


export const HotelsSearchFormList = () => {
    const [name, filterName] = useState(data);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        filterName(data.filter(hotel => hotel.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))); 
    }

    return (
        <div className='searchForm block'>
            <HotelsSearchForm onChange={handleChange} />
            <HotelsSearchList data={name} />     
        </div>
    )
}