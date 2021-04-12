import { GET_UNITS_REQUESTED,
  GET_UNITS_SUCCEED,
  GET_UNITS_FAILED,
  GET_ROUTE_UNIT_MENU,
  GET_UNITS_DETAIL_REQUESTED,
  GET_UNITS_DETAIL_SUCCEED,
  GET_UNITS_DETAIL_FAILED } from './actions';

export const initialUnitsState = {
  dataUnit: [],
  dataUnitDetail: [],
  error: null,
  url: '',
  isFetching: false,
  path: ''
};

export const units = (state = initialUnitsState, action) => {
  console.log('reducer');
  switch (action.type) {
    case GET_UNITS_REQUESTED:
      return {
        ...state,
        url: action.payload,
        isFetching: true
      };
    case GET_UNITS_SUCCEED:
      return {
        ...state,
        dataUnit: action.response,
        isFetching: false
      };
      case GET_UNITS_FAILED:
        return {
        ...state,
        error: action.error,
      };

      case GET_UNITS_DETAIL_REQUESTED:
        return {
          ...state,
          url: action.payload,
          isFetching: true
        };
      case GET_UNITS_DETAIL_SUCCEED:
        return {
          ...state,
          dataUnitDetail: action.response,
          isFetching: false
        };
        case GET_UNITS_DETAIL_FAILED:
          return {
          ...state,
          error: action.error,
        };

      case GET_ROUTE_UNIT_MENU:
        return {
        ...state,
        path: action.path,
      };
    default:
      return { ...state };
  }
}; 
