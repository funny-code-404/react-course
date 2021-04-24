import React from "react";
import NavigationItem from "./NavigationItem";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
`;

class Navigation extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  handleClick = (text) => {
    let url = `https://dog.ceo/api/breed/${text}/images/random`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        this.props.onClick(data);
      });
  };
  render() {
    const { dogs } = this.props;
    return (
      <nav>
        <List>
          {dogs.map((dog, i) => (
            <NavigationItem key={i} text={dog} onClick={this.handleClick}/>
          ))}
        </List>
      </nav>
    );
  }
}

export default Navigation;
