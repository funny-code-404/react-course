import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {todosReducer} from './todosReducer'
import {postsReducer} from './postsReducer'


const rootReducer = combineReducers({
  todos: todosReducer,
  posts: postsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
