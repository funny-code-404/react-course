import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  ACTION_INPUT_TEXT,
  ACTION_TEXTAREA_TASK,
  ACTION_UPDATE_TASKS,
  ACTION_CLEAR_STATE,
} from "../ducks/form";

const FormComponent = (props) => {
  const {
    title,
    task,
    onTitleChange,
    onTaskChange,
    onUpdateTasks,
    onClearState,
    selectedId,
  } = props;

  const handleClick = (event) => {
    event.preventDefault();

    const newTask = {
      title,
      task,
      id: selectedId ? selectedId : new Date().getTime(),
    };

    onUpdateTasks(newTask);
    onClearState();
  };

  return (
    <FormContainer>
      <Title>Todo-list</Title>
      <Input type="hidden" value={selectedId} />
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
      ></Input>
      <Textarea
        placeholder="New task"
        value={task}
        onChange={(event) => onTaskChange(event.target.value)}
      ></Textarea>
      <Button onClick={handleClick}>Save</Button>
    </FormContainer>
  );
};

const mapStateToProps = ({ form }) => ({
  title: form.title,
  task: form.task,
  selectedId: form.selectedId,
});

const mapDispatchToProps = (dispatch) => ({
  onTitleChange: (value) => dispatch(ACTION_INPUT_TEXT(value)),
  onTaskChange: (value) => dispatch(ACTION_TEXTAREA_TASK(value)),
  onUpdateTasks: (value) => dispatch(ACTION_UPDATE_TASKS(value)),
  onClearState: () => dispatch(ACTION_CLEAR_STATE()),
});

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 100px auto 20px;
`;

const Input = styled.input`
  margin-bottom: 40px;
  padding: 10px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  height: 150px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: auto auto 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 5px;
  font-size: 16px;
  margin: auto;
`;

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
