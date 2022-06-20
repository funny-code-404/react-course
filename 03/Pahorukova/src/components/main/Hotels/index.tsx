import { useState, useEffect } from "react";

type Props = {
  id: string,
  name: string,
  city: string,
  country: string,
  imageUrl: string,
}

export const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

  useEffect(() => {
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setHotels(data);
    })
  }, []);

  return (
      <div className="hotels">
        <div className="container">
          <h2 className="title-h2 hotels-title">Homes guests loves</h2>
          <ul className="hotels__list">
              {hotels.map(({id, name, city, country, imageUrl}: Props) => (
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

   
 
