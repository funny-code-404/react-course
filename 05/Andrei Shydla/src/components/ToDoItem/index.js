import React from "react";
import ItemCheckBox from "../ItemCheckBox";
import PropTypes from "prop-types";

class ToDoItem extends React.Component {
  state = {
    stateIsDone: "",
  };

  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string,
      isDone: PropTypes.bool,
      text: PropTypes.string,
    }),
    actions: PropTypes.shape({
      setDataToToDoApp: PropTypes.func,
    }),
  };

  static defaultProps = {
    data: {
      id: "",
      isDone: null,
      text: "",
    },
    actions: {
      setDataToToDoApp: {},
    },
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.data.isDone !== this.state.stateIsDone;
  }

  setDataIsDone = async (isDone) => {
    await this.setState((prevState) => ({
      ...prevState,

      stateIsDone: isDone,
    }));
  };

  async componentDidUpdate(prevProps) {
    if (this.state.stateIsDone !== prevProps.data.isDone) {
      await this.setDataIsDone(this.props.data.isDone);
    }
  }

  async componentDidMount() {
    const { isDone } = this.props.data;
    await this.setDataIsDone(isDone);
    // }
  }

  handleOnClickDel = async (event) => {
    const { setDataToToDoApp } = this.props.actions;
    await setDataToToDoApp(this.props.data.id, event.target.name);
  };

  passDataToItem = async (name, state) => {
    const { setDataToToDoApp } = this.props.actions;
    await setDataToToDoApp(this.props.data.id, name, state);
  };

  render() {
    const { id, text, isDone } = this.props.data;
    const idIsDone = `${id}isDone`;
    const classNameText = !isDone
      ? "task-item-text"
      : "task-item-text task-item-text-done";

    const checkProps = isDone
      ? {
          id: idIsDone,
          name: "isDone",
          state: isDone,
          className: "task-item-checkbox",
          checked: "checked",
        }
      : {
          id: idIsDone,
          name: "isDone",
          state: isDone,
          className: "task-item-checkbox",
        };

    return (
      <li id={id} className="task-item">
        <p className={classNameText}>{text}</p>

        <ItemCheckBox
          data={checkProps}
          actions={{
            passDataToItem: this.passDataToItem,
          }}
        />
        <button
          name="isDel"
          onClick={this.handleOnClickDel}
          className="task-item-button"
        >
          del
        </button>
      </li>
    );
  }
}
export default ToDoItem;
