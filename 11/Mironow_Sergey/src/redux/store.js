import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { postsReduces } from "../ducks/posts"
import { todosReducer } from "../ducks/todos"
import { initialState } from "./initialState"
import createSagaMiddleware from "@redux-saga/core"
import { rootSaga } from "./rootSaga"





const sagaMiddleware = createSagaMiddleware()
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
    posts: postsReduces,
    todos: todosReducer,
})

const enhancers = compose(applyMiddleware(sagaMiddleware), reduxDevtools)

export const store = createStore(reducers, initialState, enhancers)

sagaMiddleware.run(rootSaga)

