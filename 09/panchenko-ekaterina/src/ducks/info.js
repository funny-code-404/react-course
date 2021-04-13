export const INPUT_NAME = "INPUT_NAME";
export const INPUT_EMAIL = "INPUT_EMAIL";
export const INPUT_PASSWORD = "INPUT_PASSWORD";

export const ACTION_INPUT_NAME = (value) => ({
  type: INPUT_NAME,
  payload: value,
});

export const ACTION_INPUT_EMAIL = (value) => ({
  type: INPUT_EMAIL,
  payload: value,
});

export const ACTION_INPUT_PASSWORD = (value) => ({
  type: INPUT_PASSWORD,
  payload: value,
});

export const initialInfoState = {
  name: "",
  email: "",
  password: "",
};

export const info = (prevState = initialInfoState, action) => {
  switch (action.type) {
    case INPUT_NAME:
      return {
        ...prevState,
        name: action.payload,
      };
    case INPUT_EMAIL:
      return {
        ...prevState,
        email: action.payload,
      };
    case INPUT_PASSWORD:
      return {
        ...prevState,
        password: action.payload,
      };
    default:
      return {
        ...prevState,
      };
  }
};
