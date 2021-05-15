import { useState } from 'react';
import { connect } from 'react-redux';

import { FormEl, Input, Textarea, Button } from './style';

import { ACTION_REPLACE_TODO } from '../../ducks/todos';
import { ACTION_EDITING_COMPLETED } from '../../ducks/editing';

const EditingForm = ({ editingId, todos, replaceTodo, finishEditing }) => {
  const editingTodo = todos.find((item) => item.id === Number(editingId));
  const [input, setInput] = useState(editingTodo.todo);
  const [textarea, setTextarea] = useState(editingTodo.details);
  const editedTodo = {
    todo: input,
    id: editingTodo.id,
    details: (textarea.trim().length > 0) ? textarea.trim() : 'no details',
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextarea(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log('click');
    replaceTodo(editedTodo);
    finishEditing();
    setInput('');
    setTextarea('');
  };

  return (
    <FormEl>
      <Input value={input} onChange={handleInputChange} />
      <Textarea value={textarea} onChange={handleTextareaChange} />
      <Button onClick={handleClick}>Save changes</Button>
    </FormEl>
  )
};

const mapstateToProps = ({ editing, todos }) => ({
  todos: todos.todos,
  isEditing: editing.isEditing,
  editingId: editing.editingId,
});

const mapDispatchToProps = (dispatch) => ({
  replaceTodo: (value) => dispatch(ACTION_REPLACE_TODO(value)),
  finishEditing: () => dispatch(ACTION_EDITING_COMPLETED()),
});

export default connect(mapstateToProps, mapDispatchToProps)(EditingForm);