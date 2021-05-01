import React from "react";

import PropTypes from "prop-types";

class ItemCheckBox extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      state: PropTypes.bool,
      classNameList: PropTypes.string,
    }),
    actions: PropTypes.shape({
      passDataToItem: PropTypes.func,
    }),
  };

  static defaultProps = {
    data: {
      id: "",
      name: "",
      state: null,
      classNameList: "",
    },
    actions: {
      passDataToItem: {},
    },
  };

  handleClick = async (event) => {
    const { state } = this.props.data;
    const newState = !state;
    const { passDataToItem } = this.props.actions;
    await passDataToItem(event.target.name, newState);
  };

  render() {
    const { id, name, className, state } = this.props.data;
    return (
      <>
        {state === true && (
          <input
            id={id}
            type="checkbox"
            name={name}
            className={className}
            onClick={this.handleClick}
            defaultChecked="checked"
          />
        )}
        {state !== true && (
          <input
            id={id}
            type="checkbox"
            name={name}
            className={className}
            onClick={this.handleClick}
          />
        )}
        <label htmlFor={id}>{name}</label>
      </>
    );
  }
}

export default ItemCheckBox;
