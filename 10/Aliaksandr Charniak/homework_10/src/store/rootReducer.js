import { combineReducers } from 'redux'

import dataReducer from '../redux/data/reducer'
import authorReducer from '../redux/author/reducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  author: authorReducer,
})
