import { GET_CIVILS_REQUESTED, GET_CIVILS_SUCCEED, GET_CIVILS_FAILED } from './actions';

export const initialCivilsState = {
  civilizations: [],
  isFetching: false,
  error: null,
};

export const civilsReducer = (state = initialCivilsState, action) => {
  switch (action.type) {
    case GET_CIVILS_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CIVILS_SUCCEED:
      return {
        ...state,
        isFetching: false,
        civilizations: action.payload,
      };
    case GET_CIVILS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default civilsReducer;
