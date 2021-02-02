import React from 'react';
import './Footer2.css';
import instagram from './images/instagram.png';
import vk from './images/vk.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';

export const Footer2 = ({ adress, phone2 }) => (
    <div className="contact2">
      <span>Адрес</span>
      <span className="right5">{adress}</span>
      <span className="right6">{phone2}</span>
      <img src={instagram} alt="instagram" />
      <img src={vk} alt="vk" />
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
    </div>
);

export default Footer2;
