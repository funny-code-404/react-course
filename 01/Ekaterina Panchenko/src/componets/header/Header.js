import React from "react";
import "./header.scss";

import logo from "../../img/logo-hals.svg";

export const Header = ({ menu, contact }) => (
  <header className="header">
    <div className="header__img">
      <img src={logo} alt="not found" />
    </div>
    <ul className="header__menu">
      {menu.map((item, index) => {
        return (
          <li key={index} className="header__menu-item">
            {item}
          </li>
        );
      })}
    </ul>
    <ul className="header__contact">
      {contact.map((item, index) => {
        return (
          <li key={index} className="header__contact-item">
            <a className="header__contact-link" src="#">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  </header>
);
