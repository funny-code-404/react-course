
import {data} from "./data"

type Props = {
  id: string,
  name: string,
  city: string,
  country: string,
  imageUrl: string,
}

export const Hotels = () => {
  return (
      <div className="hotels">
        <div className="container">
          <h2 className="hotels__title">Homes guests loves</h2>
          <ul className="hotels__list">
              {data.map(({id, name, city, country, imageUrl}: Props) => (
                <li key = {id} className="hotels__item">
                    <img className="hotel__photo" src={imageUrl} alt={name} />
                    <a href ="/" className="hotel__title">{name}</a>
                    <p className="hotel__location">{city}, {country}</p>
                </li>
              ))}
          </ul>
      </div>
    </div>
         )
       
   };

   
 
