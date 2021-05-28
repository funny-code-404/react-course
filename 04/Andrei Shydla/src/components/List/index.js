import React from "react";
import ListItem from "../ListItem";
import PropTypes from "prop-types";

class List extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      text: PropTypes.string,
    }),
  };

  static defaultProps = {
    data: {},
  };

  render() {
    // console.log("render List");
    const { children } = this.props;

    return (
      <ul>
        <h1>List</h1>
        {children}
      </ul>
    );
  }
}

List.Item = ListItem;

export default List;
