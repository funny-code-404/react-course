export const REQUEST_POSTS = "REQUEST_POSTS"
export const ACTION_REQUEST_POSTS = (payload) => {
    return {
        type: REQUEST_POSTS,
        payload: payload,
    }
}

export const WRITE_POSTS = "WRITE_POSTS"
export const ACTION_WRITE_POSTS = (payload) => {
    return {
        type: WRITE_POSTS,
        payload: payload,
    }
}

export const GET_COMMENTED_POST = "GET_COMMENTED_POST"
export const ACTION_GET_COMMENTED_POST = (payload) => {
    return {
        type: GET_COMMENTED_POST,
        payload: +payload.match(/(?<=\/posts\/:)\d+/)[0]
    }

}


export function postsReducer(state, action){
    
    switch(action.type){
        case GET_COMMENTED_POST :
            return {
                ...state,
                lastSeenPost : state.data[action.payload - 1]
            }       
        case REQUEST_POSTS:
            return {
                ...state
            }
        case WRITE_POSTS:
            return {
                ...state,
                data: [...state.data, ...action.payload]
            }
        default:
            return {
                ...state
            }
    }

}