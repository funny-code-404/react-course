import React from "react";

class BlockInputCars extends React.Component {
  constructor(props) {
    super(props);
    const { renderProp } = this.props.data;
    this.renderProp = renderProp;

    const { input } = this.props.data.renderProp;
    this.input = input;

    this.handleOnInput = this.handleOnInput.bind(this);
  }

  handleOnInput(event) {
    const { name } = event.target;
    this.changeValue(name, event.target.value, false);
    if (this.checkValue(this.props.data.value, this.props.data.state)) {
      this.changeIsRightState(
        name,
        this.props.data.value,
        this.props.data.state
      );
    }
  }

  changeValue = (name, value, state) => {
    const { setDataToForm } = this.props.functions;
    return setDataToForm(name, value, state);
  };

  checkValue(value, state) {
    const { checkValueConditions } = this.props.functions;
    if (checkValueConditions(value)) {
      if (!state) {
        return true;
      } else {
        return false;
      }
    } else {
      if (state) {
        return true;
      } else {
        return false;
      }
    }
  }

  changeIsRightState = (name, value, state) => {
    const { setDataToForm } = this.props.functions;
    return setDataToForm(name, value, !state);
  };

  render() {
    const {
      id,
      placeholder,
      classNameInputListDefault,
      classNameInputListFalsy,
    } = this.input;

    const { state } = this.props.data;

    const classNameListInputName =
      state === "0" || state
        ? classNameInputListDefault
        : `${classNameInputListDefault} ${classNameInputListFalsy}`;

    return (
      <div>
        <input
          id={id}
          className={classNameListInputName}
          type="text"
          name={this.props.data.renderProp.input.name}
          placeholder={placeholder}
          onInput={this.handleOnInput}
          value={this.props.data.value}
        />
      </div>
    );
  }
}
export default BlockInputCars;
