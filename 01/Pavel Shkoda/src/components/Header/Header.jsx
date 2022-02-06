import React from "react";

import logo from "../../logo.svg";
import "./Header.css";

class Header extends React.Component {
  render() {
    const navMenu = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"];
    return (
      <header>
        <div className="menu">
          <img className="logo" src={logo} alt="logo" />
          <nav>
            <ul>
              {navMenu.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
