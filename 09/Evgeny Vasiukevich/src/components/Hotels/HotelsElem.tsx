import { memo, RefObject } from 'react';
import { THotel } from '../../types/types';
import NotFound from '../UI/NotFound';
import HotelCard from './HotelCard';
import { Hotels } from './styles';

type Props = {
    searchRef?: RefObject<HTMLDivElement> | null,
    hotels: THotel[] | null,
    title: string,
};

const HotelsElem = memo(({searchRef, hotels, title}: Props) => {
    return (
        <Hotels className='hotels'>
            <div ref={searchRef} className='container hotels__container'>
                <h2 className='hotels__title'>{title}</h2>
                <div className='hotels__items'>
                    {hotels?.length 
                        ? hotels.map((hotel: THotel) => <HotelCard key={hotel.id} hotel={hotel}/>) 
                        : <NotFound title='No hotels found...'/>
                    }
                </div>
            </div>
        </Hotels>
    );
});

export default HotelsElem;