import React from 'react';
import { connect } from 'react-redux';
import { ACTION_ADD_DATA } from '../../ducks/form.js';

import { Container, Input, InputsField, Button, Priority, Select } from './styles.js';

class Form extends React.Component {
  state = {
    name: '',
    todo: '',
    priority: 1,
    id: String(Math.random())
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  handleTodoChange = e => {
    this.setState({
      todo: e.target.value
    });
  }

  handlePriorityChange = e => {
    this.setState({
      priority: e.target.value
    })
  }

  handleClick = () => {
    const { onAddClick } = this.props;
    onAddClick(this.state);
    this.setState({
      name: '',
      todo: '',
      priority: 1,
      id: String(Math.random())
    });
  }

  render() {
    const { name, todo, priority } = this.state;

    return (
      <Container>
        <InputsField>
          <Input name="name" placeholder="name" onChange={this.handleNameChange} value={name}></Input>
          <Input name="todo" placeholder="TODO" onChange={this.handleTodoChange} value={todo}></Input>
          <Priority>Priority
            <Select onChange={this.handlePriorityChange} value={priority}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
          </Priority>
        </InputsField>
        <Button onClick={this.handleClick} >Add TODO</Button>
      </Container>
    )
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: (value) => dispatch(ACTION_ADD_DATA(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
