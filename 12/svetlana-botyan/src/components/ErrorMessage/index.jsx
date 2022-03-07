import { useSelector } from 'react-redux';
import { isReviewsError } from '../../ducks/reviews/selectors';

const ErrorMessage = () => {
  const reviewError = useSelector(isReviewsError);

  const error = reviewError;

  return error && <h2>Error on the server</h2>;
};

export default ErrorMessage;
