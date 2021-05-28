import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      text: PropTypes.string,
    }),
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { text } = this.props;

    return (
      <li>
        <p>{text}</p>
      </li>
    );
  }
}

export default ListItem;
