import { createStore } from 'redux'

import { rootReducer } from './rootReducer'
import { initialState } from './initialState'

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
