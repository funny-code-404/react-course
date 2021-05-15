import React from "react";
import List from "./components/List";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    tasks: [],
  };

  handleStatusChange = (id, status) => {
    this.setState((prevState) => {
      let tasks = prevState.tasks.slice();
      let index = tasks.findIndex((task) => task.id === id);
      tasks[index] = { ...tasks[index], status: status };
      return { tasks };
    });
  };

  handleTaskDelete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  handleClick = (id, text) => {
    this.setState((prevstate) => ({
      tasks: [...prevstate.tasks, { id: id, text: text, status: false }],
    }));
  };

  saveToLocalStorage = () => {
    const { tasks } = this.state;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  componentDidMount() {
    const { tasks } = this.state;
    if (tasks.length === 0) {
      console.log("ls");
      this.setState({
        tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
      });
    }
  }

  componentDidUpdate() {
    this.saveToLocalStorage();
  }

  render() {
    const { tasks } = this.state;
    const lastId = tasks.length;
    console.log("app render");
    return (
      <div>
        <Form onClick={this.handleClick} lastId={lastId} />
        {tasks && (
          <List
            data={tasks}
            onChange={this.handleStatusChange}
            onDelete={this.handleTaskDelete}
          />
        )}
      </div>
    );
  }
}

export default App;
