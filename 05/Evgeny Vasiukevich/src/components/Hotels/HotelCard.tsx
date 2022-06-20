import React, { memo } from 'react';
import { Hotel } from './styles';
import { THotel } from '../../types/types';

type Props = {
    hotel: THotel,
}

const HotelCard = memo(({hotel}: Props) => {
    return (
        <Hotel className='hotel'>
            <a>
                <img src={hotel.imageUrl} alt={hotel.name} className='hotel__image'/>
                <h4 className='hotel__title'>{hotel.name}</h4>
                <p className='hotel__subtitle'>{hotel.city}, {hotel.country}</p>
            </a>
        </Hotel>
    );
});

export default HotelCard;