import React, { Component } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

class App extends Component {
  state = {
    taskList: [],
    id: -1,
  };

  componentDidMount() {
    const taskList = localStorage.getItem("taskList")
      ? JSON.parse(localStorage.getItem("taskList"))
      : [];
    const id = +localStorage.getItem("id") || -1;

    this.setState((prevState) => ({
      ...prevState,
      taskList,
      id,
    }));
  }

  addTask = (taskText) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        taskList: [
          ...prevState.taskList,
          { taskText, id: prevState.id + 1, isChecked: false },
        ],
        id: prevState.id + 1,
      }),
      () => {
        localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
        localStorage.setItem("id", this.state.id);
      }
    );
  };

  setTaskList = (taskList) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        taskList,
      }),
      () =>
        localStorage.setItem("taskList", JSON.stringify(this.state.taskList))
    );
  };

  removeTask = (taskIndex) => {
    const { taskList } = this.state;
    taskList.splice(taskIndex, 1);
    this.setTaskList(taskList);
  };

  setChecked = (taskIndex, isChecked) => {
    const { taskList } = this.state;
    taskList[taskIndex].isChecked = isChecked;
    this.setTaskList(taskList);
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">To Do List</h1>
        <Form onClick={this.addTask} />
        <TaskList>
          {this.state.taskList.map(({ taskText, id, isChecked }, index) => (
            <TaskList.Item
              key={id}
              taskText={taskText}
              isChecked={isChecked}
              onClick={this.removeTask.bind(this, index)}
              setChecked={this.setChecked.bind(this, index, !isChecked)}
            />
          ))}
        </TaskList>
      </div>
    );
  }
}

export default App;
