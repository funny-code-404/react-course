import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_CREATE_USER } from '../../ducks/users';

const initialState = {
  name: '',
  email: '',
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
      dispatch(ACTION_CREATE_USER(values));
      setValue(initialState);
    },
    [values, dispatch]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={values.name} onChange={handleChange} />
      <input name='email' value={values.email} onChange={handleChange} />
      <button>Добавить</button>
    </form>
  );
};

export default Form;
