import React from "react";
import NavigationItem from "../NavigationItem";
import PropTypes from "prop-types";

class Navigation extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        props: PropTypes.shape({
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
        }),
      })
    ),
  };

  static defaultProps = {
    children: [
      {
        props: {
          data: {
            id: "",
            classNameList: "",
            imageData: {
              dogBreedName: "",
              url: "",
              classNameList: "",
            },
          },
          functions: {
            setUrlDataToParent: {},
          },
        },
      },
    ],
    // data: {},
  };

  render() {
    // console.log("render Navigation");
    const { children } = this.props;

    return (
      <nav>
        <ul className="dog-nav">{children}</ul>
      </nav>
    );
  }
}

Navigation.Item = NavigationItem;

export default Navigation;
