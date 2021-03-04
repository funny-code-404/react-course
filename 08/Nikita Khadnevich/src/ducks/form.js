export const initialFormState = {
  names: '',
  email: '',
  password: '',
  secname: '',
  birth: '',
  telephone: ''
};

export const form = (state = initialFormState, action) => {
  switch (action.type) {
    case 'NAMES':
      return {
        ...state,
        names: action.payload,
      };
    case 'EMAIL':
      return {
        ...state,
        email: action.payload,
    };
    case 'PASSWORD':
      return {
        ...state,
        password: action.payload,
    };
    case 'SECNAME':
      return {
        ...state,
        secname: action.payload,
    };
    case 'BIRTH':
      return {
        ...state,
        birth: action.payload,
    };
    case 'TELEPHONE':
      return {
        ...state,
        telephone: action.payload,
    };
    default:
      return {
        ...state,
      };
  }
};

