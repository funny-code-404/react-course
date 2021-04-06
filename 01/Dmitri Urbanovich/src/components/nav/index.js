import "./styles.css";
import React from "react";

class Nav extends React.Component {
  render() {
    return (
        <nav>
            <div className="container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Nav;


