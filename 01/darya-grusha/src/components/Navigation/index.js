import React from "react";
import "./styles.css";

class Nav extends React.Component {
  render() {
    const { el } = this.props;
    return (
      <li>
        <a href="/#">{el}</a>
      </li>
    );
  }
}

export default Nav;
