import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  REVIEWS_DATA_REQUESTED,
  SHOW_FORM_EDIT_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from '../../ducks/reviews/reviews';

import {
  reviewsDataSelector,
  isReviewsEditing,
} from '../../ducks/reviews/selectors';
import ListItem from '../ListItem';
import FormEdit from '../FormEdit';

function ListReviews() {
  const [value, setValue] = useState({});

  const dispatch = useDispatch();
  const data = useSelector(reviewsDataSelector);
  const isEditing = useSelector(isReviewsEditing);

  useEffect(() => {
    dispatch(REVIEWS_DATA_REQUESTED());
  }, [dispatch]);

  const handleClickRemove = (review) => {
    dispatch(DELETE_REVIEW(review));
  };

  const handleClickEdit = (review) => {
    dispatch(SHOW_FORM_EDIT_REVIEW());

    setValue(review);
  };

  const handleChange = ({ target }) => {
    setValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleClickUpdate = () => {
    dispatch(UPDATE_REVIEW(value));
  };

  return (
    <ul>
      {!isEditing ? (
        data.map((review, index) => (
          <ListItem
            key={review.id}
            index={index}
            id={review.id}
            userName={review.name}
            content={review.review}
            email={review.email}
            onClickRemove={() => handleClickRemove(review)}
            onClickEdit={() => handleClickEdit(review)}
          />
        ))
      ) : (
        <FormEdit
          id={value.id}
          name={value.name}
          review={value.review}
          email={value.email}
          onChange={handleChange}
          onClick={handleClickUpdate}
        />
      )}
    </ul>
  );
}

export default ListReviews;
