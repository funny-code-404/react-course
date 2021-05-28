import React from "react";
import PropTypes from "prop-types";

class NavigationItem extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string,
      classNameList: PropTypes.string,
      imageData: PropTypes.shape({
        dogBreedName: PropTypes.string,
        url: PropTypes.string,
        classNameList: PropTypes.string,
      }),
    }),
    functions: PropTypes.shape({
      setUrlDataToParent: PropTypes.func,
    }),
  };

  static defaultProps = {
    data: {},
  };

  handleOnClick = async () => {
    const { imageData } = this.props.data;
    const { setUrlDataToParent } = this.props.functions;
    await setUrlDataToParent(imageData);
  };

  render() {
    // console.log(
    //   `render NavigationItem ${this.props.data.imageData.dogBreedName}`
    // );
    const { id, classNameList } = this.props.data;
    const { dogBreedName } = this.props.data.imageData;

    return (
      <li id={id} className={classNameList} onClick={this.handleOnClick}>
        {dogBreedName}
      </li>
    );
  }
}

export default NavigationItem;
