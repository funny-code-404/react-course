import React, { ReactNode } from 'react';
import HotelItem from './HotelItem';
import { THotels } from '../../types/THotels';

type Hotels = {
    hotels: THotels[],
    title: string,
    children: ReactNode | string,
};

const HotelsBlock: React.FC<Hotels> = ({hotels, title, children}: Hotels) => {
    return (
        <section className='hotels'>
            <div className='container hotels__container'>
                <h2 className='hotels__title'>{title}</h2>
                {children}
                <div className='hotels__items'>
                    {hotels.length ? 
                    hotels.map((hotel: THotels) => <HotelItem key={hotel.id} hotel={hotel}/>) :
                    <h1 className='hotels__not-found-title'>No hotels found</h1>}
                </div>
            </div>
        </section>
    );
};

export default HotelsBlock;