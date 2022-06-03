import { initialState } from "../redux/initialState"

export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_WRITE = 'POSTS_WRITE'
export const POSTS_REQUEST_FAILED = 'POSTS_REQUEST_FAILED'
export const POSTS_REQUEST_SUCCEEDED = 'POSTS_REQUEST_SUCCEEDED' 

export const ACTION_POSTS_REQUEST = (payload) => {
    return {
        type: POSTS_REQUEST,
        payload: payload,
    }
}

export const ACTION_POSTS_WRITE = (payload) => {
    return {
        type: POSTS_WRITE,
        payload: payload,
    }
}

export const ACTION_POSTS_REQUEST_FAILED = (payload) =>{
    return {
        type: POSTS_REQUEST_FAILED,
        payload: payload,
    }
}

export const ACTION_POSTS_REQUEST_SUCCEEDED = (payload) => {
    return {
        type: POSTS_REQUEST_SUCCEEDED,
        payload: payload,
    }
}





export function postsReduces(state = initialState, action){
    switch(action.type){
        case POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POSTS_WRITE:
            return {
                ...state,
                data: [...action.payload]
            }
        case POSTS_REQUEST_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case POSTS_REQUEST_SUCCEEDED:
            return {
                ...state,
                error: null,
                loading: false,
            }
        default:
            return state
    }
}