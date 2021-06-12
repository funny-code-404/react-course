import React from "react";
import BlockInputLabel from "../BlockInputLabel";

class BlockInput extends React.Component {
  constructor(props) {
    super(props);
    const {
      data: {
        renderProp: { label, input, mark },
        value,
        state,
      },
    } = this.props;
    this.label = label;
    this.input = input;
    this.mark = mark;

    this.state = {
      value: value,
      isRightState: state,
    };

    this.handleOnInput = this.handleOnInput.bind(this);
  }

  async handleOnInput(event) {
    const {
      functions: { returnValueState },
    } = this.props;
    await this.changeValue(event);
    this.changeDefaultIsRightState();

    if (this.checkValue(this.state.value, this.state.isRightState)) {
      this.changeIsRightState();
    }
    // console.log(this.state.value + " - " + this.state.isRightState);

    returnValueState(this.state.value, this.state.isRightState);
  }

  changeValue = async (event) => {
    return await this.setState((prevState) => ({
      ...prevState,
      value: event.target.value,
    }));
  };

  changeDefaultIsRightState = () => {
    return this.setState((prevState) => ({
      ...prevState,
      isRightState: false,
    }));
  };

  checkValue(value, isRightState) {
    const {
      functions: { checkValueConditions },
    } = this.props;

    return checkValueConditions(value) ? !isRightState : isRightState;
  }

  changeIsRightState = () => {
    const { isRightState } = this.state;
    return this.setState((prevState) => ({
      ...prevState,
      isRightState: !isRightState,
    }));
  };

  renderMarkState = (state, classNameDefault, classNameTrue) => {
    const classNameListVerMarkName =
      state === "0" || !state
        ? classNameDefault
        : `${classNameDefault} ${classNameTrue}`;
    return <div className={classNameListVerMarkName} />;
  };

  render() {
    const {
      id,
      placeholder,
      classNameInputListDefault,
      classNameInputListFalsy,
    } = this.input;

    const { isRightState } = this.state;
    const { classNameVerMarkListDefault, classNameVerMarkListTrue } = this.mark;

    const classNameListInputName =
      isRightState === "0" || isRightState
        ? classNameInputListDefault
        : `${classNameInputListDefault} ${classNameInputListFalsy}`;

    const renderMark = this.renderMarkState(
      isRightState,
      classNameVerMarkListDefault,
      classNameVerMarkListTrue
    );

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
        <>{renderMark}</>
      </div>
    );
  }
}
export default BlockInput;
