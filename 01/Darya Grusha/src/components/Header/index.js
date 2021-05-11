import React from "react";
import "./styles.css";
import Nav from "../Navigation";

const list = ["home", "about", "products"];
class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            {list.map((item, i) => (
              <Nav el={item} key={i} />
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
