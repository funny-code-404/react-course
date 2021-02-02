import React from 'react';
import './Card.css';

export const Card = ({ price, date, title, text, image }) => (
  <div className="card">
    <div className={image}>
      <div className="info">
        <div className="price">{price}</div>
        <div className="date">{date}</div>
      </div>
    </div>
    <div className="text">
      <h3>{title}</h3>
      <p>{text}</p>
      <p className="bottom">Подробнее</p>
    </div>
  </div>
);

export default Card;
