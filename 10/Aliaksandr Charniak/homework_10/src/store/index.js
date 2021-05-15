import { createStore } from 'redux'
import { applyMiddleware, compose } from 'redux'

import { rootReducer } from './rootReducer'
import { initialState } from './initialState'
import { authorMiddleware } from './middleware/author'

const middlewareEnhancer = applyMiddleware(authorMiddleware)

const composedEnhancer = compose(
  middlewareEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, initialState, composedEnhancer)

export default store
