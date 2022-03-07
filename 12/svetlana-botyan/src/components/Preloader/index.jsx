import { useSelector } from 'react-redux';

import { isReviewsFetching } from '../../ducks/reviews/selectors';

const Preloader = () => {
  const reviewsFetching = useSelector(isReviewsFetching);

  const isFetching = reviewsFetching;
  return isFetching && <h1>LOADING...</h1>;
};

export default Preloader;
