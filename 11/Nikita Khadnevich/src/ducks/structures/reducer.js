import { GET_STRU_REQUESTED,
  GET_STRU_SUCCEED,
  GET_STRU_FAILED,
  GET_ROUTE_STRU_MENU,
  GET_STRU_DETAIL_REQUESTED,
  GET_STRU_DETAIL_SUCCEED,
  GET_STRU_DETAIL_FAILED } from './actions';

export const initialStruState = {
  dataSTRU: [],
  dataSTRUDetail: [],
  error: null,
  url: '',
  isFetching: false,
  path: ''
};

export const structures = (state = initialStruState, action) => {
  console.log('reducer');
  switch (action.type) {
    case GET_STRU_REQUESTED:
      return {
        ...state,
        url: action.payload,
        isFetching: true
      };
    case GET_STRU_SUCCEED:
      return {
        ...state,
        dataSTRU: action.response,
        isFetching: false
      };
      case GET_STRU_FAILED:
        return {
        ...state,
        error: action.error,
      };

      case GET_STRU_DETAIL_REQUESTED:
        return {
          ...state,
          url: action.payload,
          isFetching: true
        };
      case GET_STRU_DETAIL_SUCCEED:
        return {
          ...state,
          dataSTRUDetail: action.response,
          isFetching: false
        };
        case GET_STRU_DETAIL_FAILED:
          return {
          ...state,
          error: action.error,
        };
      case GET_ROUTE_STRU_MENU:
        return {
        ...state,
        path: action.path,
      };
    default:
      return { ...state };
  }
}; 
