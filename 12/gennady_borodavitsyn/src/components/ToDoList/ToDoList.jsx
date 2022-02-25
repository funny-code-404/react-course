import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TODO_ITEM_REQUESTED,
  DELETE_TODO_ITEM_REQUESTED,
  UPDATE_TODO_ITEM_REQUESTED,
} from '../../ducks/todos/todos';
import { todosSelector } from '../../ducks/todos/selectors';

function ToDoList() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const dispatch = useDispatch();
  const todosData = useSelector(todosSelector);

  useEffect(() => {
    dispatch(TODO_ITEM_REQUESTED());
  }, [dispatch]);

  const handleDeleteClick = useCallback(
    (e) => {
      dispatch(DELETE_TODO_ITEM_REQUESTED(e.target.id));
    },
    [dispatch]
  );

  const handleEditClick = useCallback((todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }, []);

  const handleChange = useCallback(
    (e) => {
      setCurrentTodo({ ...currentTodo, [e.target.name]: e.target.value });
    },
    [currentTodo]
  );

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    handleUpdateClick(currentTodo.id, currentTodo);
  };

  const handleUpdateClick = useCallback(
    (id, updatedTodo) => {
      setIsEditing(false);

      dispatch(UPDATE_TODO_ITEM_REQUESTED({ id, updatedTodo }));
    },
    [dispatch]
  );

  return (
    <>
      {isEditing ? (
        <>
          <h3>ToDo editing:</h3>
          <form onSubmit={handleEditFormSubmit}>
            <input
              type="text"
              name="title"
              value={currentTodo.title}
              onChange={handleChange}
            />
            <button>Update</button>
          </form>
        </>
      ) : (
        <>
          <h3>ToDo list:</h3>
          <ul>
            {todosData.map((todo) => (
              <li key={todo.id}>
                {/* {todo.review} */}
                {todo.title}
                <button id={todo.id} onClick={handleDeleteClick}>
                  Delete
                </button>
                <button id={todo.id} onClick={() => handleEditClick(todo)}>
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ToDoList;
