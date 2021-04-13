import { 
  GET_DATA_REQUESTED, 
  GET_ADD_DATA_REQUESTED, 
  GET_DATA_SUCCEEDED, 
  GET_ADD_DATA_SUCCEEDED, 
  GET_DATA_FAILED, 
  CLEAR_ADD_DATA,
} from './actions';


export const initialDataState = {
  fetchedData: { 
    civilizations: [],
    structures: [],
    technologies: [],
    units: [],
  },
  addData: [],
  isFetching: false,
  error: null
};

export const fetchDataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case GET_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ADD_DATA_REQUESTED:
    return {
      ...state,
      isFetching: true,
    };
    case GET_DATA_SUCCEEDED:
      return {
        ...state,
        fetchedData: { ...state.fetchedData, ...action.data },
        isFetching: false,
        error: null
      };
    case GET_ADD_DATA_SUCCEEDED:
      return {
        ...state,
        addData: [ ...state.addData, {...action.data} ],
        isFetching: false,
        error: null
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case CLEAR_ADD_DATA:
      return {
        ...state,
        addData: []
      };
    default:
      return { ...state };
  }
};
