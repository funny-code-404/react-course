export const SET_VALUE = 'SET_VALUE'

export const ACTION_SET_VALUE = ({ name, value }) => {
  const payload = {}

  payload.value = value
  payload.name = name

  return {
    type: SET_VALUE,
    payload,
  }
}

export const initialLoginFormState = {
  name: {
    value: '',
  },
  email: {
    value: '',
  },
  password: {
    value: '',
  },
}

export const loginForm = (state = initialLoginFormState, action) => {
  switch (action.type) {
    case SET_VALUE:
      const {
        payload: { name, ...rest },
      } = action

      return {
        ...state,
        [name]: {
          ...state[name],
          ...rest,
        },
      }
    default:
      return {
        ...state,
      }
  }
}
