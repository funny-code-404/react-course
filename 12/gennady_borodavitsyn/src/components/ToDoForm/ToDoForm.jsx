import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO_ITEM_REQUESTED } from '../../ducks/todos/todos';

const initialState = {
  title: '',
};

function ToDoForm() {
  const [value, setValue] = useState(initialState);
  const dispatch = useDispatch();

  const handleTodoChange = useCallback((e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleAddTodoSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(ADD_TODO_ITEM_REQUESTED(value));
      setValue(initialState);
    },
    [value, dispatch]
  );

  return (
    <>
      <form onSubmit={handleAddTodoSubmit}>
        <input
          type="text"
          name="title"
          value={value.title}
          onChange={handleTodoChange}
        />
        <button>add task</button>
      </form>
    </>
  );
}

export default ToDoForm;
