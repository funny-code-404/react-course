import React from 'react';
import { THotels } from '../../types/THotels';

type Props = { 
    hotel: THotels,
}

const HotelItem = ({hotel}: Props) => {
    return (
        <div>
            <article className='hotel'>
                <img src={hotel.imageUrl} alt={hotel.name} className='hotel__image'/>
                <h4 className='hotel__title'>{hotel.name}</h4>
                <p className='hotel__subtitle'>{hotel.city}, {hotel.country}</p>
            </article>
        </div>
    );
};

export default HotelItem;