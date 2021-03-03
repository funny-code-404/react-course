//ACTION
export const LOGIN_CHECKBOX = "LOGIN_CHECKBOX";

//ACTION CREATORS
export const ACTION_LOGIN_CHECKBOX = (value) => ({
  type: LOGIN_CHECKBOX,
  payload: value,
});

//REDUSER
export const initialLoginState = {
  checkbox: false,
};

export const login = (prevState = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_CHECKBOX:
      return {
        ...prevState,
        checkbox: action.payload,
      };
    default:
      return {
        ...prevState,
      };
  }
};
