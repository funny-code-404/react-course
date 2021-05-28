import React from "react";
import ToDoItem from "../ToDoItem";
import PropTypes from "prop-types";

class ToDoList extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        props: PropTypes.shape({
          data: PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            isDone: PropTypes.bool,
          }),
          actions: PropTypes.shape({
            setDataToToDoApp: PropTypes.func,
          }),
        }),
      })
    ),
  };

  static defaultProps = {
    children: [
      {
        props: {
          data: {
            id: "",
            text: "",
            isDone: null,
          },
          actions: {
            setDataToToDoApp: {},
          },
        },
      },
    ],
  };

  render() {
    const { children } = this.props;
    return <ul className="todo-list">{children}</ul>;
  }
}

ToDoList.Item = ToDoItem;

export default ToDoList;
