import React from "react";
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
