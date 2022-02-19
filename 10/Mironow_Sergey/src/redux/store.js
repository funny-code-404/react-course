import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { commentsReducer } from '../ducks/comments'
import { postsReducer } from '../ducks/posts'
import { getPostsMiddleware } from './middlewares/getPostsMiddleware'
import thunk from 'redux-thunk'

const initialState = {
    posts: {
        data: []
    },
    comments: {
        data: []
    },
}

const reducers = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
})

const enhancers = compose(applyMiddleware(getPostsMiddleware, thunk))

export const store = createStore(reducers, initialState, enhancers)