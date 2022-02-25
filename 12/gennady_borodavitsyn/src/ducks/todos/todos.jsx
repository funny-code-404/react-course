import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toDosList: [],
  newTodo: [],
  isFetching: false,
  error: null,
};

const toDosReducer = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    TODO_ITEM_REQUESTED: (state) => {
      state.isFetching = true;
    },
    GET_TODO_ITEMS_SUCCEED: (state, action) => {
      state.isFetching = false;
      state.toDosList = action.payload;
      state.error = initialState.error;
    },
    ADD_TODO_ITEM_REQUESTED: (state, action) => {
      state.isFetching = true;
      state.newTodo = action.payload;
    },
    DELETE_TODO_ITEM_REQUESTED: (state, action) => {
      state.isFetching = true;
      state.newTodo = action.payload;
    },
    UPDATE_TODO_ITEM_REQUESTED: (state, action) => {
      state.isFetching = true;
      state.newTodo = action.payload.updatedTodo;
    },
    TODO_ITEM_FAILED: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.message;
    },
  },
});

export const {
  TODO_ITEM_REQUESTED,
  GET_TODO_ITEMS_SUCCEED,
  ADD_TODO_ITEM_REQUESTED,
  DELETE_TODO_ITEM_REQUESTED,
  UPDATE_TODO_ITEM_REQUESTED,
  TODO_ITEM_FAILED,
} = toDosReducer.actions;

export default toDosReducer.reducer;
