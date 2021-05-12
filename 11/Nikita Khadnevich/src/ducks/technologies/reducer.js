import {
  GET_TECH_REQUESTED,
  GET_TECH_SUCCEED, 
  GET_TECH_FAILED,
  GET_TECH_REQUESTED_DETAIL,
  GET_TECH_DETAIL_SUCCEED,
  GET_TECH_DETAIL_FAILED,
  GET_ROUTE_MENU} from './actions';

export const initialTECHState = {
  dataTech: [],
  dataTechDetail: [],
  error: null,
  url: '',
  isFetching: false,
  path: ''
};

export const technologies = (state = initialTECHState, action) => {
  
  switch (action.type) {
    case GET_TECH_REQUESTED:
      return {
        ...state,
        url: action.payload,
        isFetching: true
      };
    case GET_TECH_SUCCEED:
      return {
        ...state,
        dataTech: action.response,
        isFetching: false
      };
        // 6 результат заносится в редьюсер - стор
      case GET_TECH_FAILED:
        return {
        ...state,
        error: action.error,
        isFetching: true
      };

      case GET_TECH_REQUESTED_DETAIL:
        return {
          ...state,
          url: action.payloadDetail,
          isFetching: true
        };
      case GET_TECH_DETAIL_SUCCEED:
        return {
          ...state,
          dataTechDetail: action.response,
          isFetching: false
        };
          // 6 результат заносится в редьюсер - стор
        case GET_TECH_DETAIL_FAILED:
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
