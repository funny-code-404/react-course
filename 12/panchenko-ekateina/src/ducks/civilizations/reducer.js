import { GET_CIVILIZATIONS_SUCCEED } from "./actions";

export const initialCivilizationsState = {
  data: null,
  isFetching: false,
  error: null,
};

export const civilizations = (state = initialCivilizationsState, action) => {
  switch (action.type) {
    case GET_CIVILIZATIONS_SUCCEED:
      return {
        ...state,
        data: action.response,
      };
    default:
      return { ...state };
  }
};
