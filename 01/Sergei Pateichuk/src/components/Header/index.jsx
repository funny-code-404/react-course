import React from "react";
import "./style.css";
import logo from "../../logo.svg";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
        <a href="#"> <img src={logo}/></a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Main</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Price</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
