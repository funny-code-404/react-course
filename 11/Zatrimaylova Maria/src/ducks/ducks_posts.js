export const GET_POSTS_SUCCEED = 'GET_POSTS_SUCCEED';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
export const DATA_REQUESTED = 'DATA_REQUESTED';

export const getPostsRequested = () => ({
    type: DATA_REQUESTED,
});

export const getPostsSucceeded = (data) => ({
    type: GET_POSTS_SUCCEED,
    data,
});

export const getPostsFailed = (error) => ({
    type: GET_POSTS_FAILED,
    error,
});

export const ACTION_GET_POSTS = () => async (dispatch) => {
    try {
        dispatch(getPostsRequested());

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        dispatch(getPostsSucceeded(data));
    } catch(error) {
        dispatch(getPostsFailed(error));
    }
};

export const initialPostsState = {
    posts: [],
    isFetching: false,
    error: null,
};

export const posts = (state = initialPostsState, action) => {
    switch (action.type) {
        case DATA_REQUESTED: 
            return {
                ...state,
                isFetching: true,
            };
        case GET_POSTS_SUCCEED:
            return {
                ...state,
                isFetching: false,
                posts: action.data,
            };
        case GET_POSTS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default: 
            return { ...state };
    }
};