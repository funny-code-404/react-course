import { usersReducer } from '../ducks/users/reducer';
import { postsReducer } from '../ducks/posts/reducer';
import { reviewsReducer } from '../ducks/reviews/reducer';

export const rootReducer = {
  users: usersReducer,
  posts: postsReducer,
  reviews: reviewsReducer,
};
