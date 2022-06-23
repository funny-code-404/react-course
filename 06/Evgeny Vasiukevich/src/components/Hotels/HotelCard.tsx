import { memo } from 'react';
import { Link } from 'react-router-dom';
import { THotel } from '../../types/types';
import { Hotel } from './styles';

type Props = {
    hotel: THotel,
}

const HotelCard = memo(({hotel}: Props) => {
    return (
        <Hotel className='hotel'>
            <Link to={`/hotels/${hotel.id}`} state={hotel} >
                <img src={hotel.imageUrl} alt={hotel.name} className='hotel__image'/>
                <h4 className='hotel__title'>{hotel.name}</h4>
                <p className='hotel__subtitle'>{hotel.city}, {hotel.country}</p>
            </Link>
        </Hotel>
    );
});

export default HotelCard;