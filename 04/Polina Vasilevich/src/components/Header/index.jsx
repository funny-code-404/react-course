import React, { Component } from "react";
import { List, ListItem } from "./styles";
import PropTypes from "prop-types";

class Header extends Component {
  state = {
    activeHeader: "",
  };

  handleClick = (e) => {
    const activeHeader = e.target.title.toLowerCase();

    this.props.onChangeImage(activeHeader);

    this.setState((prevState) => ({
      ...prevState,
      activeHeader,
    }));
  };

  render() {
    return (
      <header>
        <nav>
          <List onClick={this.handleClick}>
            {this.props.headers.map((header, index) => (
              <ListItem
                key={index}
                title={header}
                className={
                  this.state.activeHeader === header.toLowerCase() &&
                  "active-header"
                }
              >
                {header}
              </ListItem>
            ))}
          </List>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  headers: PropTypes.array,
  onChangeImage: PropTypes.func,
};

Header.defaultProps = {
  headers: [],
  onChangeImage: "",
};

export default Header;
