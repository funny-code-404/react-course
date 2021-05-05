import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { List, ListItem } from "./styles";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <List>
            {this.props.routes.map(({ path, label }) => (
              <ListItem key={path}>
                <Link to={path}>{label}</Link>
              </ListItem>
            ))}
          </List>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  routes: PropTypes.array.isRequired,
};

Header.defaultProps = {
  routes: [],
};

export default Header;
