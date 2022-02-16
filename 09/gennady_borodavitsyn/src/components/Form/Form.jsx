import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_CREATE_USER } from '../../ducks/users';

const initialState = {
  name: '',
  email: '',
};

function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialState);

  const handleChange = useCallback((e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(ACTION_CREATE_USER(value));
      setValue(initialState);
    },
    [dispatch, value]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
        />
        <button>Add user</button>
      </form>
    </div>
  );
}

export default Form;
