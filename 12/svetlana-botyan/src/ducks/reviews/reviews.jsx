import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  isFetching: false,
  isEditing: false,
};

const reviewsReducer = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    REVIEWS_DATA_REQUESTED: (state) => {
      state.isFetching = true;
    },
    GET_REVIEWS_DATA_SUCCEED: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.error = initialState.error;
    },
    ADD_REVIEW: (state, action) => {
      state.isFetching = false;
      state.data.push(action.payload);
    },
    DELETE_REVIEW: (state, action) => {
      state.isFetching = false;
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
    SHOW_FORM_EDIT_REVIEW: (state, action) => {
      state.isEditing = true;
    },
    UPDATE_REVIEW: (state, action) => {
      state.isFetching = false;
      state.isEditing = false;
      state.data = state.data.map((review) => {
        if (review.id === action.payload.id) {
          return action.payload;
        }
        return review;
      });
    },
    REVIEWS_DATA_FAILED: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.message;
    },
  },
});

export const {
  REVIEWS_DATA_REQUESTED,
  GET_REVIEWS_DATA_SUCCEED,
  REVIEWS_DATA_FAILED,
  ADD_REVIEW,
  DELETE_REVIEW,
  SHOW_FORM_EDIT_REVIEW,
  UPDATE_REVIEW,
} = reviewsReducer.actions;
export default reviewsReducer.reducer;
