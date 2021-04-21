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

    this.handleOnInput = this.handleOnInput.bind(this);
  }

  async handleOnInput(event) {
    const { name } = event.target;
    await this.changeValue(name, event.target.value, false);
    if (this.checkValue(this.props.data.value, this.props.data.state)) {
      await this.changeIsRightState(
        name,
        this.props.data.value,
        this.props.data.state
      );
    }
  }

  changeValue = async (name, value, state) => {
    const { setDataToForm } = this.props.functions;
    return await setDataToForm(name, value, state);
  };

  checkValue(value, state) {
    const { checkValueConditions } = this.props.functions;
    if (checkValueConditions(value)) {
      if (!state) {
        // console.log("true - true - first right changing");
        return true;
      } else {
        // console.log("true - false - after first right changing");
        return false;
      }
    } else {
      if (state) {
        // console.log("false - true - clear input after changing");
        return true;
      } else {
        // console.log("false - false - first wrong changing");
        return false;
      }
    }
  }

  changeIsRightState = async (name, value, state) => {
    const { setDataToForm } = this.props.functions;
    return await setDataToForm(name, value, !state);
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
        <BlockInputLabel data={{ label: this.label }} />
        <input
          id={id}
          className={classNameListInputName}
          type="text"
          name={this.props.data.renderProp.input.name}
          placeholder={placeholder}
          onInput={this.handleOnInput}
          value={this.props.data.value}
        />
        <BlockInputMark
          data={{ mark: this.mark, state: this.props.data.state }}
        />
      </div>
    );
  }
}
export default BlockInput;
