//ACTIONS
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const REPLACE_TODO = 'REPLACE_TODO';

//ACTION CREATORS
export const ACTION_ADD_TODO = value => ({
    type: ADD_TODO,
    payload: value,
});

export const ACTION_DELETE_TODO = value => ({
    type: DELETE_TODO,
    payload: value,
});

export const ACTION_REPLACE_TODO = value => ({
    type: REPLACE_TODO,
    payload: value,
});

//REDUCERS
export const initialTodoListState = {
    todos: [],
};

export const todos = (prevState = initialTodoListState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...prevState,
                todos: [...prevState.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...prevState,
                todos: prevState.todos.filter((item) => item.id !== Number(action.payload))
            }
        case REPLACE_TODO: 
            return {
                ...prevState,
                todos: prevState.todos.map((item) => {
                    return (
                        item.id === Number(action.payload.id) ? action.payload : item
                    )
                })
            }
        default: 
            return {
                ...prevState,
            };
    }
}