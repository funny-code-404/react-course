import React from "react";
import BlockInputLabel from "../BlockInputLabel";
import BlockInputMark from "../BlockInputMark";

class BlockInput extends React.Component {
  constructor(props) {
    super(props);
    const { renderProp } = this.props.data;
    this.renderProp = renderProp;

    const { label, input, mark } = this.props.data.renderProp;
    this.label = label;
    this.input = input;
    this.mark = mark;

    const { value, state } = this.props.data;
    this.state = {
      value: value,
      isRightState: state,
    };

    this.handleOnInput = this.handleOnInput.bind(this);
  }

  async handleOnInput(event) {
    const { returnValueState } = this.props.functions;
    await this.changeValue(event);
    await this.changeDefaultIsRightState();
    if (this.checkValue(this.state.value, this.state.isRightState)) {
      await this.changeIsRightState();
    }
    returnValueState(this.state.value, this.state.isRightState);
  }

  changeValue = async (event) => {
    return this.setState((prevState) => ({
      ...prevState,
      value: event.target.value,
    }));
  };

  changeDefaultIsRightState = async () => {
    return this.setState((prevState) => ({
      ...prevState,
      isRightState: false,
    }));
  };

  checkValue(value, isRightState) {
    const { checkValueConditions } = this.props.functions;
    if (checkValueConditions(value)) {
      if (!isRightState) {
        // console.log("true - true - first right changing");
        return true;
      } else {
        // console.log("true - false - after first right changing");
        return false;
      }
    } else {
      if (isRightState) {
        // console.log("false - true - clear input after changing");
        return true;
      } else {
        // console.log("false - false - first wrong changing");
        return false;
      }
    }
  }

  changeIsRightState = async () => {
    const { isRightState } = this.state;
    return this.setState((prevState) => ({
      ...prevState,
      isRightState: !isRightState,
    }));
  };

  render() {
    const {
      id,
      placeholder,
      classNameInputListDefault,
      classNameInputListFalsy,
    } = this.input;

    const { isRightState } = this.state;

    const classNameListInputName =
      isRightState === "0" || isRightState
        ? classNameInputListDefault
        : `${classNameInputListDefault} ${classNameInputListFalsy}`;

    return (
      <div>
        <BlockInputLabel data={{ label: this.label }} />
        <input
          id={id}
          className={classNameListInputName}
          type="text"
          placeholder={placeholder}
          onInput={this.handleOnInput}
          value={this.state.value}
        />
        <BlockInputMark
          data={{ mark: this.mark, state: this.state.isRightState }}
        />
      </div>
    );
  }
}
export default BlockInput;
