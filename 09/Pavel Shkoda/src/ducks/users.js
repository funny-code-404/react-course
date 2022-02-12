import { v4 as uuidv4 } from 'uuid';

// ACTION TYPES
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

// ACTION CREATORW (ACTIONS)
export const ACTION_CREATE_USER = (payload) => ({
  type: CREATE_USER,
  payload: {
    ...payload,
    id: uuidv4(),
  },
});

export const ACTION_UPDATE_USER = (id) => ({
  type: UPDATE_USER,
  payload: {id},
});

export const ACTION_DELETE_USER = (id) => ({
  type: DELETE_USER,
  payload:{id},
});

// SELECTORS
export const dataSelector = (state) => state.users.data;

// INITIAL STATE
export const initialState = {
  data: [],
};

// REDUCER
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case UPDATE_USER:
      return {
        data: state.data.filter(({ id }) => {
        if (id !== action.payload.id) {
          return action.payload
        }
        return {
          ...state,
        data: [...state.data, ],
        }
      })};
    case DELETE_USER:
      return {
        data: [...state.data.filter(({ id }) => id !== action.payload.id)],
      };
    default:
      return {
        ...state,
      };
  }
};
