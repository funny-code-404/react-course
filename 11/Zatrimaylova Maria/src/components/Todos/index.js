import React from 'react';
import { connect } from 'react-redux';
import { ACTION_GET_CURRENT_TODOS } from '../../ducks/ducks_currentTodos.js';
import { ACTION_GET_TODOS } from '../../ducks/ducks_todos.js';

import Spinner from '../Spinner/index';
import { TodosContainer, ListItem, Button } from './styled';

class Posts extends React.Component {

    componentDidMount() {
        const { getTodosData } = this.props;
        getTodosData();
    };

    handlePostClick = (e) => {
        const { history, getCurrentTodosData } = this.props;
        const currentId = e.currentTarget.closest('li').id;

        history.push(`/todos/${currentId}`);
        getCurrentTodosData(currentId);
    };
    
    render() {
        const { content, isFetching } = this.props;

        return (
            <>
                {isFetching && <Spinner />}
                <TodosContainer>
                    {content.map((item) => (
                        <ListItem key={item.id} id={item.id}>
                            <h3>{item.title}</h3>
                            <Button onClick={this.handlePostClick}>Click for details</Button>
                        </ListItem> 
                    ))}
                </TodosContainer>
            </>
        )
    };       
};

export const mapStateToProps = ({ todos }) => ({ 
    content: todos.todos,
    isFetching: todos.isFetching,
});

export const mapDispatchToProps = (dispatch) => ({
    getCurrentTodosData: (value) => {dispatch(ACTION_GET_CURRENT_TODOS(value))},
    getTodosData: () => {dispatch(ACTION_GET_TODOS())},
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);