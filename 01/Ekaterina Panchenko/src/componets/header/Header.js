import React from "react";
import "./header.scss";

import logo from "../../img/logo-hals.svg";

export const Header = ({ menu, contact }) => (
  <header className="header">
    <div className="header__img">
      <img src={logo} alt="not found" />
    </div>
    <ul className="header__menu">
      {menu.map(({ name, id }) => {
        return (
          <li key={id} className="header__menu-item">
            {name}
          </li>
        );
      })}
    </ul>
    <ul className="header__contact">
      {contact.map(({ name, id }) => {
        return (
          <li key={id} className="header__contact-item">
            <a className="header__contact-link" src="#">
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  </header>
);
