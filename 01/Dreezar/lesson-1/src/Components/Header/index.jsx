import React from "react";
import "./header-style.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="second-container">
            <a href="#">
              <img src={require("../images/logo.svg").default} width={150} />
            </a>
            <nav>
              <a href="#">Прайс-лист</a>
              <a href="#">Услуги</a>
              <a href="#">Мастера</a>
              <a href="#">Контакты</a>
              <a href="#">О нас</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
