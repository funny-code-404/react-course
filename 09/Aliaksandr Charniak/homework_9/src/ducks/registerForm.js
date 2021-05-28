export const SET_REGISTER_VALUE = 'SET_REGISTER_VALUE'

export const ACTION_SET_REGISTER_VALUE = ({ name, value }) => {
  const payload = {}

  payload.value = value
  payload.name = name

  return {
    type: SET_REGISTER_VALUE,
    payload,
  }
}

export const initialRegisterState = {
  surname: {
    value: '',
  },
  yearOfBirth: {
    value: '',
  },
  phone: {
    value: '',
  },
}

export const registerForm = (state = initialRegisterState, action) => {
  switch (action.type) {
    case SET_REGISTER_VALUE:
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
