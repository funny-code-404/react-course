import React, { Component } from "react";

import { TaskListItem, TaskText, Checkbox, RemoveButton } from "./styles";
import { FiCheck, FiTrash2 } from "react-icons/fi";

class TaskListItemComponent extends Component {
  handleClickCheckbox = () => {
    this.props.setChecked(!this.props.isChecked);
  };

  render() {
    return (
      <TaskListItem>
        <Checkbox onClick={this.handleClickCheckbox}>
          {this.props.isChecked && <FiCheck className="check" />}
        </Checkbox>

        <TaskText className={this.props.isChecked && "isChecked"}>
          {this.props.taskText}
        </TaskText>

        <RemoveButton onClick={this.props.onClick}>
          <FiTrash2 />
        </RemoveButton>
      </TaskListItem>
    );
  }
}

export default TaskListItemComponent;
