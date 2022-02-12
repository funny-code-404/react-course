export const initialState = {
  data: [],
};

export const reviewsReducer = (state = initialState, action) => {
  console.log(action);
  return {
    ...state,
  };
};
