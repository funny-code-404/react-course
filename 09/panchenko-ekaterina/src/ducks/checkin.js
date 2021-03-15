export const CHECHIN_CHECKBOX = "CHECHIN_CHECKBOX";
export const INPUT_SURNAME = "INPUT_SURNAME";
export const INPUT_DATE = "INPUT_DATE";
export const INPUT_PHONE = "INPUT_PHONE";

export const ACTION_CHECHIN_CHECKBOX = (value) => ({
  type: CHECHIN_CHECKBOX,
  payload: value,
});

export const ACTION_INPUT_SURNAME = (value) => ({
  type: INPUT_SURNAME,
  payload: value,
});

export const ACTION_INPUT_DATE = (value) => ({
  type: INPUT_DATE,
  payload: value,
});

export const ACTION_INPUT_PHONE = (value) => ({
  type: INPUT_PHONE,
  payload: value,
});

export const initialCheckinState = {
  checkbox: false,
  surname: "",
  date: "",
  phone: "",
};

export const checkin = (prevState = initialCheckinState, action) => {
  switch (action.type) {
    case CHECHIN_CHECKBOX:
      return {
        ...prevState,
        checkbox: action.payload,
      };
    case INPUT_SURNAME:
      return {
        ...prevState,
        surname: action.payload,
      };
    case INPUT_DATE:
      return {
        ...prevState,
        date: action.payload,
      };
    case INPUT_PHONE:
      return {
        ...prevState,
        phone: action.payload,
      };
    default:
      return {
        ...prevState,
      };
  }
};
