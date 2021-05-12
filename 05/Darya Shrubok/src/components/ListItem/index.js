import React from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
  padding: 0 10px;
  background-color: ${(props) => (props.isCompleted ? "green" : "red")};
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

class ListItem extends React.PureComponent {
  handleChange = (e) => {
    const { id } = this.props.data;
    this.props.onChange(id, e.target.checked);
  };
  handleClick = (e) => {
    e.preventDefault();
    const { id } = this.props.data;
    this.props.onDelete(id);
  };
  render() {
    console.log("render item");
    const { text, status } = this.props.data;
    return (
      <TaskContainer isCompleted={status}>
        <input type="checkbox" onChange={this.handleChange} checked={status} />
        <p>{text}</p>
        <DeleteButton onClick={this.handleClick}>Delete</DeleteButton>
      </TaskContainer>
    );
  }
}

export default ListItem;
