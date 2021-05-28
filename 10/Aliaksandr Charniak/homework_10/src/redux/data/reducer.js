import { ADD_NOTIFICATION, DELETE_NOTIFICATION, COMPLETE_NOTIFICATION, CHECK_DATE } from './actions'

export const initialDataState = []

const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload]
    case DELETE_NOTIFICATION: {
      const item = state.indexOf(action.payload)
      return [...state.slice(0, item), ...state.slice(item + 1)]
    }
    case COMPLETE_NOTIFICATION: {
      const item = state.indexOf(action.payload)
      return [
        ...state.slice(0, item),
        { ...state[item], completed: true },
        ...state.slice(item + 1),
      ]
    }
    case CHECK_DATE: {
      const items = state.map((el) =>
        el.date <
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
          ? { ...el, outdated: true }
          : el
      )
      return [...items]
    }
    default:
      return [...state]
  }
}

export default dataReducer
