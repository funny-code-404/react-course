import { nanoid } from 'nanoid';
import { store } from '../redux/store';

// ACTION TYPES
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

// ACTION CREATORS
export const ACTION_CREATE_USER = (payload) => ({
  type: CREATE_USER,
  payload: {
    ...payload,
    id: nanoid(),
  },
});

export const ACTION_DELETE_USER = (id) => {
  const payload = store.getState().data.filter((user) => user.id !== id);
  return {
    type: DELETE_USER,
    payload,
  };
};

export const ACTION_UPDATE_USER = (id, updatedUser) => {
  const payload = store.getState().data.map((user) => {
    return user.id === id ? updatedUser : user;
  });

  return {
    type: UPDATE_USER,
    payload,
  };
};

// SELECTORS
export const dataSelector = (state) => state.data;

// INITIAL STATE
export const initialState = {
  data: [],
};

// REDUCER
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
