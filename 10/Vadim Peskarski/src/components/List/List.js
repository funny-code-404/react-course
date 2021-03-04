import React from 'react';
import { connect } from 'react-redux';
import { ACTION_DELETE_DATA } from '../../ducks/form.js';
import EditForm from '../EditForm/EditForm.js';
import { TodoList, ListItem, Name, Todo, Priority, DeleteButton, EditButton } from './styles.js';

class List extends React.Component {
  state = {
    toEdit: false,
    editId: null,
    activeId: null,
  }

  handleDeleteClick = (e) => {
    const { deleteTodo } = this.props;
    deleteTodo(e.target.closest('li').id);
  }

  handleEditClick = (e) => {
    this.setState({
      toEdit: true,
      editId: e.target.closest('li').id
    });
  }

  handleActiveClick =(e) => {
    this.setState({
      activeId: e.target.closest('li').id
    })
  }

  onEditClick = () => {
    this.setState({
      toEdit: false,
      editId: null
    })
  }

  render() {
    const { data } = this.props;
    const { toEdit, editId, activeId } = this.state;
    return (
      <div>
        <TodoList>
          {data.map((element) => {
            return (
              <ListItem key={element.id} id={element.id} onClick={this.handleActiveClick}
              isActive={activeId === element.id ? true : false}>
                <Name>{element.name}</Name>
                <Todo>{element.todo}</Todo>
                <Priority>Priority {element.priority}</Priority>
                <div>
                  <DeleteButton onClick={this.handleDeleteClick}>Delete</DeleteButton>
                  <EditButton onClick={this.handleEditClick}>Edit</EditButton>
                </div>
              </ListItem>
            )
          })}
        </TodoList>
        {toEdit && <EditForm id={editId} onEditClick={this.onEditClick} />}
      </div>
    )
  }
}

const mapStateToProps = ({ form }) => ({
  data: form.data,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (value) => dispatch(ACTION_DELETE_DATA(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
