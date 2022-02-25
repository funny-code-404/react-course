import { combineReducers } from 'redux';

import { usersReducer } from '../ducks/users';
import { reviewsReducer } from '../ducks/reviews';

const reducers = {
  users: usersReducer,
  reviews: reviewsReducer,
};

export const reducer = combineReducers({
  ...reducers,
});
