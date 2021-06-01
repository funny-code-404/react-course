import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import rootSaga from './rootSaga'
import { initialState } from './initialState'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const getDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof getDevToolsExtension === 'function') {
    enhancers.push(getDevToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

sagaMiddleware.run(rootSaga)

export default store
