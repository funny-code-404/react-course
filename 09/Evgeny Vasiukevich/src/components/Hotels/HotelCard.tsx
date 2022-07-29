import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionSetCurrentHotel } from '../../redux/hotels/actions';
import { THotel } from '../../types/types';
import { Hotel } from './styles';

type Props = {
    hotel: THotel,
}

const HotelCard = memo(({hotel}: Props) => {
    const dispatch = useDispatch();
    
    const handleClick = () => dispatch(actionSetCurrentHotel(hotel));

    return (
        <Hotel className='hotel'> 
            <Link to={`/hotels/${hotel.id}`} onClick={handleClick} >
                <img src={hotel.imageUrl} alt={hotel.name} className='hotel__image'/>
                <h4 className='hotel__title'>{hotel.name}</h4>
                <p className='hotel__subtitle'>{hotel.city}, {hotel.country}</p>
            </Link>
        </Hotel>
    );
});

export default HotelCard;