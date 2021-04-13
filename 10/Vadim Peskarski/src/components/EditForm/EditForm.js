import React from 'react';
import { connect } from 'react-redux';
import { ACTION_EDIT_DATA } from '../../ducks/form.js';
import { Container, Input, InputsField, Button, Select, Priority } from '../Form/styles.js';

class EditForm extends React.Component {
  state = {
    name: this.props.data.find(element => String(element.id) === String(this.props.id)).name,
    todo: this.props.data.find(element => String(element.id) === String(this.props.id)).todo,
    priority: this.props.data.find(element => String(element.id) === String(this.props.id)).priotity,
    id: this.props.id
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleTodoChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  handlePriorityChange = (e) => {
    this.setState({
      priority: e.target.value
    })
  }

  handleClick = () => {
    const { onEditTodo, onEditClick } = this.props;
    onEditTodo(this.state);
    this.setState({
      name: '',
      todo: '',
      priority: null,
      id: null
    })
    onEditClick();
  }

  render() {
    const { name, todo } = this.state;
    return (
      <Container>
        <InputsField>
          <Input name="name" onChange={this.handleNameChange} value={name}></Input>
          <Input name="todo" onChange={this.handleTodoChange} value={todo}></Input>
          <Priority>Priority
            <Select onChange={this.handlePriorityChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
          </Priority>
        </InputsField>
        <Button onClick={this.handleClick}>Approve</Button>
      </Container>
    )
  }
}

const mapStateToProps = ({ form }) => ({
  data: form.data
});

const mapDispatchToProps = (dispatch) => ({
  onEditTodo: (value) => dispatch(ACTION_EDIT_DATA(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
