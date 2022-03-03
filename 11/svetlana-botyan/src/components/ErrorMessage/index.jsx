import { useSelector } from 'react-redux';
import { isUsersError } from '../../../src/ducks/users/selectors';
import { isPostsError } from '../../../src/ducks/posts/selectors';
import { isReviewsError } from '../../../src/ducks/reviews/selectors';

const ErrorMessage = () => {
  const usersError = useSelector(isUsersError);
  const postsError = useSelector(isPostsError);
  const reviewsError = useSelector(isReviewsError);

  const error = usersError || postsError || reviewsError;
  return error && <h1>{error}</h1>;
};

export default ErrorMessage;
