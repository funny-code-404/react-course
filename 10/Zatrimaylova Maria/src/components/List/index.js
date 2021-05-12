import { connect } from 'react-redux';
import { ListContainer, ListItem, ButtonContainer, TextItem, Button } from './style';
import { ACTION_DELETE_TODO } from '../../ducks/todos';
import { ACTION_EDITING_STARTED } from '../../ducks/editing';
import { useState } from 'react';

const List = (props) => {
    const { todos, deleteTodo, editTodo, isEditing } = props;

    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleDeleteClick = (e) => {
        if (isEditing) {
            return;
        };

        deleteTodo(e.currentTarget.closest('li').id);
    };

    const handleSelectClick = (e) => {
        if (isEditing) {
            return;
        };

        if (e.target.tagName.toLowerCase() !== 'button') {
            const currentId = e.target.closest('li').id;
            setSelectedTodo(currentId);
        };
    };

    const handleEditClick = (e) => {
        const currentId = e.target.closest('li').id;
        editTodo(currentId);
    };

    return (
        <ListContainer>
            {todos.map((item) => (
                <ListItem key={item.id} id={item.id} onClick={handleSelectClick} selected={(Number(selectedTodo) === item.id) ? true : false}>
                    <ButtonContainer>
                        <Button onClick={handleDeleteClick}>Х</Button>
                        <Button onClick={handleEditClick}>Edit</Button>
                    </ButtonContainer>
                    <TextItem>
                        <h3>{item.todo}</h3> 
                        <p>{item.details}</p>
                    </TextItem>
                </ListItem> 
            ))}
        </ListContainer>
    )
};

const mapstateToProps = ({ todos, editing }) => ({
    todos: todos.todos,
    isEditing: editing.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (value) => dispatch(ACTION_DELETE_TODO(value)),
    editTodo: (value) => dispatch(ACTION_EDITING_STARTED(value)),
});

export default connect(mapstateToProps, mapDispatchToProps)(List);