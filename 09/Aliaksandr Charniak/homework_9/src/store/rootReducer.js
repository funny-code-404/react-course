import { combineReducers } from 'redux'

import { loginForm } from '../ducks/loginForm'
import { entryForm } from '../ducks/entryForm'
import { deleteForm } from '../ducks/deleteForm'
import { registerForm } from '../ducks/registerForm'
import { actionButton } from '../ducks/actionButton'

export const rootReducer = combineReducers({
  actionButton,
  loginForm,
  entryForm,
  deleteForm,
  registerForm,
})
