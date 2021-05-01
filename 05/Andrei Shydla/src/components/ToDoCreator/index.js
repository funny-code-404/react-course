import React from "react";
import PropTypes from "prop-types";

class ToDoCreator extends React.Component {
  state = {
    placeholder: "enter your next step to your succcess",
    defaultValue: "",
    currentValue: "",
    activateOnFocus: false,
  };

  static propTypes = {
    functions: PropTypes.shape({
      passToParent: PropTypes.func,
    }),
  };

  static defaultProps = {
    functions: {
      passToParent: {},
    },
  };

  shouldComponentUpdate(prevProps) {
    const { activateOnFocus } = this.state;
    return activateOnFocus;
  }

  handleClick = async () => {
    // throw new Error("My custom error");

    const task = this.createTask();
    const { passToParent } = this.props.functions;
    await passToParent(task);
    await this.setDefaultValue();
  };

  createTask() {
    const id = `${Date.now()}`;
    const key = `key${Date.now()}`;
    const { currentValue } = this.state;
    const text = currentValue;
    const isDone = false;
    // const isDel = false;
    const task = {
      taskKey: key,
      taskData: { id: id, text: text, isDone: isDone },
    };
    return task;
  }

  setDefaultValue = async () => {
    const { defaultValue } = this.state;
    await this.setState((prevState) => ({
      ...prevState,

      currentValue: defaultValue,
      activateOnFocus: false,
    }));
  };

  handleOnFocus = async () => {
    await this.setState((prevState) => ({
      ...prevState,

      activateOnFocus: true,
    }));
  };

  handleChange = async (event) => {
    // console.log(this);

    // console.log(event.target.value);
    await this.setState((prevState) => ({
      ...prevState,

      currentValue: event.target.value,
    }));
  };

  //   shouldComponentUpdate() {
  //     return false;
  //   }

  render() {
    const { currentValue, placeholder } = this.state;
    return (
      <>
        <input
          onFocus={this.handleOnFocus}
          value={currentValue}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
        <button onClick={this.handleClick}>Create</button>
      </>
    );
  }
}

export default ToDoCreator;
