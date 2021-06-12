import React from "react";
import c from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={c.header}>
      <nav>
        <ul className={c.nav}>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT ME</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACTS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
