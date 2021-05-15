import React, { Component } from "react";
import PropTypes from "prop-types";

import { FaPlus } from "react-icons/fa";
import { Form, TextTask, Button, Error } from "./styles";

class FormComponent extends Component {
  state = {
    taskText: "",
    isValid: true,
  };

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      taskText: e.target.value,
      isValid: true,
    }));
  };

  handleClick = (e) => {
    e.preventDefault();
    const { taskText } = this.state;

    if (taskText) {
      this.props.onClick(taskText);
      this.setState((prevState) => ({
        ...prevState,
        taskText: "",
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        isValid: false,
      }));
    }
  };

  render() {
    const { taskText, isValid } = this.state;
    return (
      <Form>
        <TextTask
          type="text"
          name="taskText"
          onChange={this.handleChange}
          value={taskText}
          placeholder="New task"
          className={!isValid && "error"}
        ></TextTask>
        {!isValid && <Error>Please fill out this field.</Error>}

        <Button onClick={this.handleClick}>
          <FaPlus />
        </Button>
      </Form>
    );
  }
}

FormComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FormComponent;
