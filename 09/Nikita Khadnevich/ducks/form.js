export const initialFormState = {
  names: '',
};

export const NAMES = 'NAMES';

export const form = (state = initialFormState, action) => {
  switch (action.type) {
    case NAMES:
      return {
        ...state,
        names: action.payload,
        // 4 А тут в names уже вносится пэйлоад экшена
      };
    default:
      return {
        ...state,
      };
  }
};

