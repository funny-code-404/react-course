import {
  GET_CIVIL_REQUESTED,
  GET_CIVIL_SUCCEED, 
  GET_CIVIL_FAILED,
  GET_CIVIL_REQUESTED_DETAIL,
  GET_CIVIL_DETAIL_SUCCEED,
  GET_CIVIL_DETAIL_FAILED,
  GET_ROUTE_MENU} from './actions';

export const initialCivilState = {
  data: [],
  dataDetail: [],
  error: null,
  url: '',
  isFetching: false,
  path: ''
};

export const civil = (state = initialCivilState, action) => {

  switch (action.type) {
    case GET_CIVIL_REQUESTED:
      return {
        ...state,
        url: action.payload,
        isFetching: true
      };
    case GET_CIVIL_SUCCEED:
      return {
        ...state,
        data: action.response,
        isFetching: false
      };
        // 6 результат заносится в редьюсер - стор
      case GET_CIVIL_FAILED:
        return {
        ...state,
        error: action.error,
        isFetching: true
      };

      case GET_CIVIL_REQUESTED_DETAIL:
        return {
          ...state,
          url: action.payloadDetail,
          isFetching: true
        };
      case GET_CIVIL_DETAIL_SUCCEED:
        return {
          ...state,
          dataDetail: action.response,
          isFetching: false
        };
          // 6 результат заносится в редьюсер - стор
        case GET_CIVIL_DETAIL_FAILED:
          return {
          ...state,
          error: action.error,
          isFetching: false
        };
      case GET_ROUTE_MENU:
        return {
        ...state,
        path: action.path,
      };
      default:
        return { ...state };
  }
}; 
