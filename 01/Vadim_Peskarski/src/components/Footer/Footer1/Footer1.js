import React from 'react';
import './Footer1.css';

export const Footer1 = ({ email, phone1 }) => (
    <div className="contact1">
      <span>E-mail</span>
      <span className="right3">{email}</span>
      <span>Телефоны</span>
      <span className="right4">{phone1}</span>
      <span>Мы в соцсетях</span>
    </div>
);

export default Footer1;
