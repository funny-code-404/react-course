import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_REVIEW } from '../../ducks/reviews/reviews';
import Input from '../Input';
import { nanoid } from 'nanoid';

const initialState = {
  name: '',
  review: '',
  email: '',
  id: nanoid(),
};

const Form = () => {
  const dispatch = useDispatch();
  const [values, setValue] = useState(initialState);

  const handleChange = useCallback((e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(ADD_REVIEW(values));
      setValue(initialState);
    },
    [values, dispatch]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your name
        <Input
          name="name"
          type="text"
          value={values.name}
          placeholder="Max"
          onChange={handleChange}
        />
      </label>
      <label>
        Write a review
        <Input
          name="review"
          type="text"
          value={values.review}
          placeholder="some text"
          onChange={handleChange}
        />
      </label>
      <label>
        Your email
        <Input
          name="email"
          type="email"
          value={values.email}
          placeholder="hgjf2@gmail.com"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add review</button>
    </form>
  );
};

export default Form;
