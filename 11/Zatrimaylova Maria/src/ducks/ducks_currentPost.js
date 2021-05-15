export const GET_CURRENT_POST_SUCCEED = 'GET_CURRENT_POST_SUCCEED';
export const GET_CURRENT_POST_FAILED = 'GET_CURRENT_POST_FAILED';
export const DATA_REQUESTED = 'DATA_REQUESTED';

export const getCurrentPostRequested = () => ({
    type: DATA_REQUESTED,
});

export const getCurrentPostSucceeded = (data) => ({
    type: GET_CURRENT_POST_SUCCEED,
    data,
});

export const getCurrentPostsFailed = (error) => ({
    type: GET_CURRENT_POST_FAILED,
    error,
});

export const ACTION_GET_CURRENT_POSTS = (value) => async (dispatch) => {
    try {
        dispatch(getCurrentPostRequested());

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}`);
        const data = await res.json();

        dispatch(getCurrentPostSucceeded(data));
    } catch(error) {
        dispatch(getCurrentPostsFailed(error));
    }
};

export const initialCurrentPostState = {
    post: [],
    isFetching: false,
    error: null,
};

export const currentPost = (state = initialCurrentPostState, action) => {
    switch (action.type) {
        case DATA_REQUESTED: 
            return {
                ...state,
                isFetching: true,
            };
        case GET_CURRENT_POST_SUCCEED:
            return {
                ...state,
                isFetching: false,
                post: action.data,
            };
        case GET_CURRENT_POST_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default: 
            return { ...state };
    }
};