import React from 'react';
import './trip.css'

export const TripCase = (props) => {
    
    const allTrips = props.trips;
    const tripsItem = allTrips.map((item) => 
        <div className="direction">
            <span className="ribbon">от <span className="price">{item.price}$</span></span>
            <span className="ribbon-dep">{item.date}</span>
            <img src={item.image} alt="direction-view" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#" className="detail">Подробнее</a>
        </div>);

        return (
            <div className="container actual">
                <h2>{props.title}</h2>
                <div className="directions">
                    {tripsItem}
                </div>
                <a href="#" class="view-all">Смотреть все</a>
            </div>
            
        );
    
    
  }

  export default TripCase;
