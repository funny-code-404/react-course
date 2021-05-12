import styled from "styled-components";

const commonStyles = `
width: 30px;
height: 30px;
outline: none; 
cursor: pointer;
`;

export const TaskListItem = styled.li`
  margin: 20px 0;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-radius: 5px;
  border: 1px solid #d0d7df;
`;

export const TaskText = styled.p`
  width: 90%;
  margin-left: 20px;

  font-size: 1.2em;

  &.isChecked {
    text-decoration: line-through #4f999e;
    color: #bbc1c8;
  }
`;

export const Checkbox = styled.div`
  ${commonStyles}
  border: 2px solid #d0d7df;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  .check {
    font-size: 1.5em;
    color: #4f999e;
  }
`;

export const RemoveButton = styled.button`
  ${commonStyles}
  border: none;
  background-color: transparent;

  font-size: 30px;
  color: #4f999e;
  display: flex;
  align-items: center;
  justify-content: center;
`;
