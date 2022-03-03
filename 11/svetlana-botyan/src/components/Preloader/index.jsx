import { useSelector } from 'react-redux';
import { isUsersFetching } from '../../ducks/users/selectors';
import { isPostsFetching } from '../../ducks/posts/selectors';
import { isReviewsFetching } from '../../ducks/reviews/selectors';

const Preloader = () => {
  const usersFetching = useSelector(isUsersFetching);
  const postsFetching = useSelector(isPostsFetching);
  const reviewsFetching = useSelector(isReviewsFetching);

  const isFetching = usersFetching || postsFetching || reviewsFetching;
  return isFetching && <h1>LOADING...</h1>;
};

export default Preloader;
