import { GET_COMMENTED_POST, REQUEST_POSTS } from "../../ducks/posts"
import { ACTION_WRITE_POSTS } from "../../ducks/posts"


export const getPostsMiddleware = (store) => (dispatch) => async (action) => {
    if (action.type === REQUEST_POSTS){
        let posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        dispatch(ACTION_WRITE_POSTS(posts))
    }else if (action.type === GET_COMMENTED_POST && store.getState().posts.data.length === 0){
        let posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        dispatch(ACTION_WRITE_POSTS(posts))
    }
    dispatch(action)
}