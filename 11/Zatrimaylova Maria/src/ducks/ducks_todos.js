export const GET_TODOS_SUCCEED = 'GET_TODOS_SUCCEED';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
export const DATA_REQUESTED = 'DATA_REQUESTED';

export const getTodosRequested = () => ({
    type: DATA_REQUESTED,
});

export const getTodosSucceeded = (data) => ({
    type: GET_TODOS_SUCCEED,
    data,
});

export const getTodosFailed = (error) => ({
    type: GET_TODOS_FAILED,
    error,
});

export const ACTION_GET_TODOS = () => async (dispatch) => {
    try {
        dispatch(getTodosRequested());

        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        dispatch(getTodosSucceeded(data));

    } catch(error) {
        dispatch(getTodosFailed(error));
    }
};

export const initialTodosState = {
    todos: [],
    isFetching: false,
    error: null,
};

export const todos = (state = initialTodosState, action) => {
    switch (action.type) {
        case DATA_REQUESTED: 
            return {
                ...state,
                isFetching: true,
            };
        case GET_TODOS_SUCCEED:
            return {
                ...state,
                isFetching: false,
                todos: action.data,
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default: 
            return { ...state };
    }
};