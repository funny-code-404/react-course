import React from 'react';
import './Nav.css';
import logo from './images/logo.png';

const listItems = [
  'О нас', 'Туры', 'Визы', 'Агентам', 'Контакты', 'Помощь'
]

export const Nav = () => (
  <ul className="top">
    <img src={logo} className="logo" alt="logo" />
    {
      listItems.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default Nav;
