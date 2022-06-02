import React, { memo } from 'react';
import { Hotel } from '../../styles/layout/Hotels';
import { THotel } from '../../types/THotel';

const HotelCard = memo(({hotel}: { hotel: THotel}) => {
    return (
        <Hotel className='hotel'>
            <img src={hotel.imageUrl} alt={hotel.name} className='hotel__image'/>
            <h4 className='hotel__title'>{hotel.name}</h4>
            <p className='hotel__subtitle'>{hotel.city}, {hotel.country}</p>
        </Hotel>
    );
});

export default HotelCard;