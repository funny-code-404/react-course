import React from "react";
import PropTypes from "prop-types";

class DogImage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      dogBreedName: PropTypes.string,
      url: PropTypes.string,
      classNameList: PropTypes.string,
    }),
  };

  static defaultProps = {
    data: {
      dogBreedName: "",
      url: "",
      classNameList: "",
    },
  };

  render() {
    console.log(`render dogImage ${this.props.data.dogBreedName}`);
    const { dogBreedName, url, classNameList } = this.props.data;

    return (
      <>
        <img
          className={classNameList}
          src={url}
          alt={`dog ${dogBreedName}`}
          style={{ height: 300 + "px" }}
        />
      </>
    );
  }
}

export default DogImage;
