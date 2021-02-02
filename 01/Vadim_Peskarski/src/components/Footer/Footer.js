import React from 'react';
import Footer1 from './Footer1/Footer1.js';
import Footer2 from './Footer2/Footer2.js';

export const Footer = () => (
  <footer>
    <Footer1 email="wildvacation@gmail.com" phone1="+375 33 888-44-22" />
    <Footer2 adress="Немига 5а, офис 18, Минск" phone2="+375 29 963-85-21" />
  </footer>
);

export default Footer;
