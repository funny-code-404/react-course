import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ListItem = styled.li`
  margin-right: 30px;
`;

class NavigationItem extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  handleClick = () => {
    const { text } = this.props;
    this.props.onClick(text);
  };
  render() {
    const { text } = this.props;
    return <ListItem onClick={this.handleClick}>{text}</ListItem>;
  }
}

export default NavigationItem;
