import React from "react";
import PropTypes from "prop-types";

class Image extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };
  componentDidMount() {
    console.log("изображение загружено");
  }

  render() {
    const { source } = this.props;
    return <img src={source}/>;
  }
}

export default Image;
