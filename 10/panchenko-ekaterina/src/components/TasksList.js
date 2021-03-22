import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ACTION_EDIT_TASK, ACTION_CLEAR_STATE } from "../ducks/form";

const TasksListComponent = (props) => {
  const { onEditTask, tasks, onClearState } = props;

  const handleClick = (id) => {
    onClearState();
    onEditTask(id);
  };

  return (
    <>
      {tasks.map((elem) => (
        <Container key={elem.id}>
          <Button onClick={() => handleClick(elem.id)}>Edit</Button>
          <Title>{elem.title}</Title>
          <Description>{elem.task}</Description>
        </Container>
      ))}
    </>
  );
};

const mapStateToProps = ({ form }) => ({
  tasks: form.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  onEditTask: (value) => dispatch(ACTION_EDIT_TASK(value)),
  onClearState: () => dispatch(ACTION_CLEAR_STATE()),
});

const Container = styled.div`
  border: 2px solid black;
  margin-left: 100px;
  width: 30%;
  overflow-y: scroll;
  height: 190px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button``;

const Title = styled.h2`
  text-align: center;
  border-bottom: 2px solid black;
`;

const Description = styled.p`
  overflow-wrap: anywhere;
`;

export const TasksList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksListComponent);
