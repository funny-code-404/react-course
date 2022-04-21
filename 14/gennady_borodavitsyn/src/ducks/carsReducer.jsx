// ACTION TYPES
const GET_CARS_REQUESTED = 'GET_CARS_REQUESTED';
const GET_CARS_SUCCEED = 'GET_CARS_SUCCEED';
const GET_CARS_FAILED = 'GET_CARS_FAILED';

// ACTION CREATORS
export const ACTION_GET_CARS_REQUESTED = () => ({
  type: GET_CARS_REQUESTED,
});

export const ACTION_GET_CARS_SUCCEED = (data) => ({
  type: GET_CARS_SUCCEED,
  payload: data,
});

export const ACTION_GET_CARS_FAILED = (error) => ({
  type: GET_CARS_FAILED,
  payload: error,
});

export const getCars = async (api, dispatch) => {
  try {
    dispatch(ACTION_GET_CARS_REQUESTED());

    const data = await api();

    dispatch(ACTION_GET_CARS_SUCCEED(data));
  } catch (error) {
    dispatch(ACTION_GET_CARS_FAILED(error));
  }
};

// INITIAL STATE
export const initialCarsState = {
  data: {},
  loading: false,
  error: null,
};

// REDUCER
export const carsReducer = (state = initialCarsState, action) => {
  switch (action.type) {
    case GET_CARS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_CARS_SUCCEED:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: state.error,
      };
    case GET_CARS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
