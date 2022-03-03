import { initialState as initialUsersState } from '../ducks/users/reducer';
import { initialState as initialReviewsState } from '../ducks/reviews/reducer';
import { initialState as initialPostsState } from '../ducks/posts/reducer';

export const initialState = {
  users: initialUsersState,
  posts: initialPostsState,
  reviews: initialReviewsState,
};
