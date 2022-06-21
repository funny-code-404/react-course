import React, { memo } from 'react';
import { THotel } from '../../types/types';
import HotelCard from './HotelCard';
import { Hotels } from './styles';

type Props = {
    hotels: THotel[],
    title: string,
};

const HotelsElem = memo(({hotels, title}: Props) => {
    return (
        <Hotels className='hotels'>
            <div className='container hotels__container'>
                <h2 className='hotels__title'>{title}</h2>
                <div className='hotels__items'>
                    {hotels.length 
                        ? hotels.map((hotel: THotel) => <HotelCard key={hotel.id} hotel={hotel}/>) 
                        : <h1 className='hotels__not-found-title'>No hotels found</h1>
                    }
                </div>
            </div>
        </Hotels>
    );
});

export default HotelsElem;