import React from "react";
import ToDoCreator from "../ToDoCreator";
import ToDoList from "../ToDoList";
import PropTypes from "prop-types";
import "./style.css";

const nameDataBase = "dataBase";

class ToDoApp extends React.Component {
  state = {
    [nameDataBase]: [],
    baseState: false,
  };

  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  async componentDidMount() {
    const dataFromLS = await this.checkLS(nameDataBase).then((data) => {
      return data;
    });

    if (!this.state.baseState && dataFromLS) {
      const dataBase = await this.getBaseFromLS(nameDataBase).then(
        (data) => data
      );
      console.log(dataBase);

      await this.setState((prevState) => ({
        ...prevState,
        [nameDataBase]: dataBase,
      }));
    }
  }

  getBaseFromLS = async (nameBase) => {
    return await JSON.parse(localStorage.getItem(nameBase));
  };

  checkLS = async (nameBase) => {
    return await (localStorage.getItem(nameBase) !== null);
  };

  passToParent = async (task) => {
    const { dataBase } = this.state;
    dataBase.push(task);

    await this.setState((prevState) => ({
      ...prevState,
      [nameDataBase]: dataBase,
    }));

    await this.setDataBaseToLS(nameDataBase, this.state[nameDataBase]);
  };

  setDataBaseToLS = async (baseName, dataBase) => {
    return await localStorage.setItem(baseName, JSON.stringify(dataBase));
  };

  removeDataBaseFromLS = async (baseName) => {
    return await localStorage.removeItem(baseName);
  };

  setDataToToDoApp = async (id, name, state = "") => {
    if (name === "isDel") {
      await this.deleteTaskFromDataBase(id, name);
    } else {
      await this.setNewStateIsDone(id, state);
    }
    console.log(this.state[nameDataBase]);
  };

  setNewStateIsDone = async (id, state) => {
    const keyChange = `key${id}`;

    const currentDataBase = this.state[nameDataBase];
    const newDataBase = currentDataBase.map((item) => {
      if (item.taskKey === keyChange) {
        const newItem = item;
        newItem.taskData.isDone = state;
        return newItem;
      } else {
        return item;
      }
    });

    await this.setState((prevState) => ({
      ...prevState,
      [nameDataBase]: newDataBase,
    }));
    await this.removeDataBaseFromLS(nameDataBase);
    await this.setDataBaseToLS(nameDataBase, this.state[nameDataBase]);
  };

  deleteTaskFromDataBase = async (id, name) => {
    const keyDelete = `key${id}`;
    const currentDataBase = this.state[nameDataBase];
    const newDataBase = currentDataBase.filter(
      (item) => item.taskKey !== keyDelete
    );
    await this.setState((prevState) => ({
      ...prevState,
      [nameDataBase]: newDataBase,
    }));

    await this.removeDataBaseFromLS(nameDataBase);
    await this.setDataBaseToLS(nameDataBase, this.state[nameDataBase]);
  };

  render() {
    const { dataBase } = this.state;

    return (
      <div className="container">
        <h1>ToDo App</h1>
        <ToDoCreator functions={{ passToParent: this.passToParent }} />
        <ToDoList>
          {dataBase.map(({ taskKey, taskData }) => (
            <ToDoList.Item
              key={taskKey}
              data={taskData}
              actions={{ setDataToToDoApp: this.setDataToToDoApp }}
            />
          ))}
        </ToDoList>
      </div>
    );
  }
}

export default ToDoApp;
