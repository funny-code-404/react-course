import "./styles.css";
import React from "react";

const nav = [
  { value: "About the shelter", link: "#about" },
  { value: "Our pets", link: "#pets" },
  { value: "Help the shelter", link: "#help" },
  { value: "Contacts", link: "#contacts" },
];

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <div className="logo">
            <h1 className="logo__title">Cozy House</h1>
            <div className="logo__subtitle">Shelter for pets in Boston</div>
          </div>
          <nav className="menu">
            <ul className="list">
              {nav.map((item, i) => {
                return (
                  <li className="list__item" key={i}>
                    <a
                      className="list__link list__link_inactive"
                      href={item.link}
                    >
                      {item.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="burger-menu">
            <img
              src="/assets/icons/Burger.svg"
              alt="Burger menu"
              className="burger-menu__image"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
