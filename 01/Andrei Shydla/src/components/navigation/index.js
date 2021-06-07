import React from "react";
import "./style.css";

function Navigation() {
  return (
    <nav>
      <div className="nav">
        <ul className="container">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
