import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './rootReducer'
import { initialState } from './initialState'

const devToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancers = [devToolsExtension]

const middlewares = [thunkMiddleware]

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store
