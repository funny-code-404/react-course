import React from "react";

class Form extends React.Component {
  state = {
    task: "",
    id: 0,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { id, task } = this.state;
    this.props.onClick(id, task);
    this.setState((prevState) => ({
      task: "",
      id: prevState.id + 1,
    }));
  };
  handleChange = (e) => {
    const { value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      task: value,
    }));
  };
  static getDerivedStateFromProps(props, prevState) {
    const { lastId } = props;
    return {
      ...prevState,
        id: lastId,
    };
  }
  render() {
    console.log("render form");
    const { task } = this.state;
    return (
      <form>
        <input
          value={task}
          name="task"
          placeholder="task"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}

export default Form;
