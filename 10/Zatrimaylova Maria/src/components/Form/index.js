import React from 'react';
import { connect } from 'react-redux';

import { FormContainer, StartContainer, FormEl, Input, Textarea, Button } from './style.js';
import EditingForm from '../EditingForm';

import { ACTION_ADD_TODO } from '../../ducks/todos';

class Form extends React.Component {
    state = {
        inputTodo: '',
        textareaDetails: '',
        isActive: false,
    };

    createId = () => {
        const id = new Date().valueOf();
        return id;
    };

    handleChangeTodo = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            inputTodo: e.target.value,
        }));
    };

    handleChangeDetails = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            textareaDetails: e.target.value,
        }));
    };

    handleCreateClick = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            ...prevState,
            isActive: true,
        }));
    };

    handleCancelClick = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            ...prevState,
            inputTodo: '',
            textareaDetails: '',
            isActive: false,
        }));
    };

    handleAddClick = (e) => {
        e.preventDefault();
        
        const { addTodo } = this.props;
        const { inputTodo, textareaDetails } = this.state;

        if (inputTodo.trim()) {
            const result = { 
                todo: inputTodo.trim(), 
                id: this.createId(),
                details: (textareaDetails.trim().length > 0) ? textareaDetails.trim() : 'no details',
            };
            addTodo(result);
        };
        
        this.setState({
            inputTodo: '',
            textareaDetails: '',
        });
    };

    render() {
        const { inputTodo, textareaDetails, isActive } = this.state;
        const { isEditing } = this.props;

        return (
            <FormContainer>
                {!isActive && !isEditing &&
                    <StartContainer onClick={this.handleCreateClick}>Click here to create new todo</StartContainer>
                }

                {isActive && !isEditing &&
                    <FormEl>
                        <Input value={inputTodo} placeholder='What needs to be done?' maxLength='50' onChange={this.handleChangeTodo} />
                        <Textarea value={textareaDetails} placeholder='Details..' onChange={this.handleChangeDetails} />
                        <Button onClick={this.handleAddClick}>Add todo</Button>
                        <Button onClick={this.handleCancelClick}>Cancel</Button>
                    </FormEl>
                }

                {isEditing && <EditingForm />}
            </FormContainer>
        )
    }
};

const mapstateToProps = ({ editing }) => ({
    isEditing: editing.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (value) => dispatch(ACTION_ADD_TODO(value)),
});

export default connect(mapstateToProps, mapDispatchToProps)(Form);