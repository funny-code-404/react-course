import { v4 as uuidv4 } from 'uuid';
import { store } from '../redux/store'

// ACTION TYPES
export const CREATE_USER = 'CREATE_USER';
export const SHOW_FORM_UPDATE_USER = 'SHOW_FORM_UPDATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

// ACTION CREATORW (ACTIONS)
export const ACTION_CREATE_USER = (payload) => ({
  type: CREATE_USER,
  payload: {
    ...payload,
    id: uuidv4(),
    isEdit: false,
  },
});

// показать/спрятать inputs для обновления данных
export const ACTION_SHOW_FORM_UPDATE_USER = (id) => {
  const payload = store.getState().users.data.map(item => {
    if (item.id === id) {
      return { ...item, isEdit: !item.isEdit }
    }
    return item
  })

  return {
    type: SHOW_FORM_UPDATE_USER,
    payload,
  }
};

export const ACTION_UPDATE_USER = (id, value) => {

  const payload = store.getState().users.data.map(item => {
    if (item.id === id) {
      return { ...item, ...value, isEdit: !item.isEdit }
    }
    return item
  })

  return {
    type: UPDATE_USER,
    payload,
  }
};


export const ACTION_DELETE_USER = (id) => {
  const payload = store.getState().users.data.filter(item => item.id !== id)

  return {
    type: DELETE_USER,
    payload,
  }
};

// SELECTORS
export const dataSelector = (state) => state.users.data;
export const dataEditSelector = (state) => state.users.data;

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
        ...state,
        data: action.payload,
      };
    case SHOW_FORM_UPDATE_USER:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_USER:
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
