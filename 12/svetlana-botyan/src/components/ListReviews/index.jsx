import { useEffect, useState, useCallback } from 'react';
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

  const handleClickRemove = useCallback(
    (review) => {
      dispatch(DELETE_REVIEW(review));
    },
    [dispatch]
  );

  const handleClickEdit = useCallback(
    (review) => {
      dispatch(SHOW_FORM_EDIT_REVIEW());

      setValue(review);
    },
    [dispatch]
  );

  const handleChange = useCallback(({ target }) => {
    setValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }, []);

  const handleClickUpdate = useCallback(() => {
    dispatch(UPDATE_REVIEW(value));
  }, [dispatch, value]);

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
