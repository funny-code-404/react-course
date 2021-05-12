export const GET_CURRENT_TODOS_SUCCEED = 'GET_CURRENT_TODOS_SUCCEED';
export const GET_CURRENT_TODOS_FAILED = 'GET_CURRENT_TODOS_FAILED';
export const DATA_REQUESTED = 'DATA_REQUESTED';

export const getCurrentTodosRequested = () => ({
    type: DATA_REQUESTED,
});

export const getCurrentTodosSucceeded = (data) => ({
    type: GET_CURRENT_TODOS_SUCCEED,
    data,
});

export const getCurrentTodosFailed = (error) => ({
    type: GET_CURRENT_TODOS_FAILED,
    error,
});

export const ACTION_GET_CURRENT_TODOS = (value) => async (dispatch) => {
    try {
        dispatch(getCurrentTodosRequested());

        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${value}`);
        const data = await res.json();

        dispatch(getCurrentTodosSucceeded(data));
    } catch(error) {
        dispatch(getCurrentTodosFailed(error));
    }
};

export const initialCurrentTodosState = {
    todo: [],
    isFetching: false,
    error: null,
};

export const currentTodos = (state = initialCurrentTodosState, action) => {
    switch (action.type) {
        case DATA_REQUESTED: 
            return {
                ...state,
                isFetching: true,
            };
        case GET_CURRENT_TODOS_SUCCEED:
            return {
                ...state,
                isFetching: false,
                todo: action.data,
            };
        case GET_CURRENT_TODOS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default: 
            return { ...state };
    }
};