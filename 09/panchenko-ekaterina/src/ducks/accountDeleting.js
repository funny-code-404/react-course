export const INPUT_COMMENT = "INPUT_COMMENT";
export const RADIO_RATE = "RADIO_RATE";

export const ACTION_INPUT_COMMENT = (value) => ({
  type: INPUT_COMMENT,
  payload: value,
});

export const ACTION_RADIO_RATE = (value) => ({
  type: RADIO_RATE,
  payload: value,
});

export const initialAccountDeletingState = {
  comment: "",
  rate: "5",
};

export const accountDeleting = (
  state = initialAccountDeletingState,
  action
) => {
  switch (action.type) {
    case INPUT_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case RADIO_RATE:
      return {
        ...state,
        rate: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
