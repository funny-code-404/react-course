import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_REVIEWS_DATA_REQUESTED } from '../../ducks/reviews/actions';
import { reviewsDataSelector } from '../../ducks/reviews/selectors';

function ReviewList() {
  const dispatch = useDispatch();
  const postsData = useSelector(reviewsDataSelector);

  const handleClick = () => dispatch(ACTION_GET_REVIEWS_DATA_REQUESTED());

  return (
    <div className="App">
      <button onClick={handleClick}>Get list of reviews</button>
      <ul>
        {postsData.map((review) => (
          <li key={review.id}>{review.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
