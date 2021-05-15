import { ACTION_ADD_AUTHOR } from '../../redux/author/actions'
import { ADD_NOTIFICATION, ACTION_CHECK_DATE } from '../../redux/data/actions'

export const authorMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_NOTIFICATION) {
    next(ACTION_CHECK_DATE())
    next(ACTION_ADD_AUTHOR(action.payload.author))
  }
  next(action)
}
