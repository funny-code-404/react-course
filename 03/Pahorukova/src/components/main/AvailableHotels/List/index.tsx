import {ReactNode} from 'react';
import { Hotel } from '../index';

type Props = {
  data: Hotel[];
};

const List = ({data}: Props) => { 
  return (
    <div className="hotels-available">
       <div className="container">
         {data.length?
           <ul className="hotels__list">
            {data.map(
              (hotel: Hotel): ReactNode=> (
                <li key = {hotel.id} className="hotels__item">
                   <img className="hotel__photo" src={hotel.imageUrl} alt={hotel.name} />
                    <a href ="/" className="hotel__title">{hotel.name}</a>
                    <p className="hotel__location">{hotel.city}, {hotel.country}</p>
                </li>  
             )
            )}
          </ul> :
          <div className='not-found d-flex flex-column align-center'>
            <img className='not-found__icon' src={require('../../../../imgs/search-icon.png')} alt="" />
            <p className='not-found__text'>Unfortunately, nothing was found. Choose another hotel!</p>
          </div>
        }
       </div>
    </div>
  )
    
    };

export default List;