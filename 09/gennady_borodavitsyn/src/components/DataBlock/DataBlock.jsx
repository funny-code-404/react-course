import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  dataSelector,
  ACTION_DELETE_USER,
  ACTION_UPDATE_USER,
} from '../../ducks/users';

import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
`;

function DataBlock() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  const handleEditClick = useCallback((user) => {
    setIsEditing(true);
    setCurrentUser({ ...user });
  }, []);

  const handleChange = useCallback(
    (e) => {
      setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    },
    [currentUser]
  );

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    handleUpdateClick(currentUser.id, currentUser);
  };

  const handleUpdateClick = useCallback(
    (id, updatedUser) => {
      setIsEditing(false);

      dispatch(ACTION_UPDATE_USER(id, updatedUser));
    },
    [dispatch]
  );

  const handleDeleteClick = useCallback(
    (e) => {
      dispatch(ACTION_DELETE_USER(e.target.id));
    },
    [dispatch]
  );

  return (
    <div>
      <h2>List of users:</h2>
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <input
            type="text"
            name="name"
            value={currentUser.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={currentUser.email}
            onChange={handleChange}
          />
          <button>Update</button>
        </form>
      ) : (
        <Ul>
          {data.map((user) => (
            <li key={user.id}>
              <div>
                <div>
                  <h3>{user.name}</h3> <p>{user.email}</p>
                </div>

                <button id={user.id} onClick={() => handleEditClick(user)}>
                  Edit
                </button>

                <button id={user.id} onClick={handleDeleteClick}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </Ul>
      )}
    </div>
  );
}

export default DataBlock;
