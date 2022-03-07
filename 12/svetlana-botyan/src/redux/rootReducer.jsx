import { combineReducers } from '@reduxjs/toolkit';
import reviewsReducer from '../ducks/reviews/reviews';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

export default rootReducer;
