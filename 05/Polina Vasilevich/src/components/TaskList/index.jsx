import React, { Component } from "react";

import TaskListItem from "./TaskListItem";
import { TaskList } from "./styles";

class TaskListComponent extends Component {
  render() {
    return <TaskList>{this.props.children}</TaskList>;
  }
}

TaskListComponent.Item = TaskListItem;

export default TaskListComponent;
