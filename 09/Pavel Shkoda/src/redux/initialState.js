import { initialState as initialUsersState } from '../ducks/users';
import { initialState as initialReviewsState } from '../ducks/reviews';

export const initialState = {
  users: initialUsersState,
  reviews: initialReviewsState,
};
