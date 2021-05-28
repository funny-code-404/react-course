import { initialLoginFormState } from '../ducks/loginForm'
import { initialEntryFormState } from '../ducks/entryForm'
import { initialDeleteFormState } from '../ducks/deleteForm'
import { initialRegisterState } from '../ducks/registerForm'
import { initialActionButtonState } from '../ducks/actionButton'

export const initialState = {
  actionButton: initialActionButtonState,
  loginForm: initialLoginFormState,
  entryForm: initialEntryFormState,
  deleteForm: initialDeleteFormState,
  registerForm: initialRegisterState,
}
