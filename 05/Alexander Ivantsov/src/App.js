import React from 'react';

import './index.css';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import { getTasksLS, saveTasksLS } from './components/SaveLocal';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    const localData = getTasksLS('tasks');

    if (localData === null) {
      this.setState({ tasks: [] });
    } else {
      this.setState({ tasks: localData });
    }
  }

  componentDidUpdate() {
    const { tasks } = this.state;
    saveTasksLS('tasks', tasks);
  }

  addTask = task => {
    this.setState(prevState => {
      let { tasks } = prevState;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        completed: false
      });
      return tasks;
    })
  }

  completedTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);

    this.setState(prevState => {
      let { tasks } = prevState;
      tasks[index].completed = true;
      return tasks;
    })
  }

  deleteTask = id => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) })
  }

  render() {
    const { tasks } = this.state;

    const completedTasks = tasks.filter(task => task.completed);
    const activeTasks = tasks.filter(task => !task.completed);

    return (
      <div className="todo">
        <h1 className="counter-tasks">Tasks left: {activeTasks.length}</h1>
        {[...activeTasks, ...completedTasks].map(task => (
          <Task 
            completedTask={() => this.completedTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task} 
            key={task.id} 
          />
        ))}
        <TaskInput addTask={this.addTask} tasks={tasks} />
      </div>
    )
  }
}

export default App;
