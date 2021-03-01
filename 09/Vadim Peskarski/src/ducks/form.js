export const initialFormState = {
  name: '',
  email: '',
  password: ''
}

export const form = (state = initialFormState, action) => {
  switch (action.type) {
    case 'NAME_INPUT':
      return {
        ...state,
        name: action.payload
      };
    case 'EMAIL_INPUT':
      return {
        ...state,
        email: action.payload
      };
    case 'PASSWORD_INPUT':
      return {
        ...state,
        password: action.payload
      };
    default:
      return {
        ...state
      }
  }
}
