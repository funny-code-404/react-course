import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export function ForceNavigate(path){
    const history = useHistory()
    history.push(path)
}


export const requestComments = (payload) => async (dispatch) => {
    try {
        const comments = await (await fetch('https://jsonplaceholder.typicode.com/comments')).json()
        const postNum = +payload.match(/(?<=\/posts\/:)\d+/)[0]
        const commentsUnderPost = comments.filter((el) => el.postId === postNum)
        dispatch(ACTION_WRITE_COMMENTS(commentsUnderPost))
    } catch (err) {
        dispatch(ACTION_REQUEST_COMMENTS_FAILED(err))
    }
}

export const WRITE_COMMENTS = "WRITE_COMMENTS"
export const ACTION_WRITE_COMMENTS = (payload) => {
    return {
        type: WRITE_COMMENTS,
        payload: payload,
    }
}

export const REQUEST_COMMENTS_FAILED = 'REQUEST_COMMENTS_FAILED'
export const ACTION_REQUEST_COMMENTS_FAILED = (payload) => {
    return {
        type: REQUEST_COMMENTS_FAILED,
        payload: payload,
    }
}


export function commentsReducer(state, action){
    switch(action.type){
        case WRITE_COMMENTS:
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