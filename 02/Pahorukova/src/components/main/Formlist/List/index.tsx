import {ReactNode} from 'react';


type Hotel = {
  id: string,
  name: string,
  city: string,
  country: string,
  imageUrl: string,
};

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
          <h2 className='hotels__not-found'>Unfortunately, nothing was found. Choose another hotel!</h2>
        }
       </div>
    </div>
  )
    
    };

export default List;