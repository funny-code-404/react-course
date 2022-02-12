import { useSelector, useDispatch } from 'react-redux'
import { dataSelector } from '../../ducks/users';
import { ACTION_DELETE_USER, ACTION_UPDATE_USER } from '../../ducks/users';

const DataBlock = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch()

  const handleClickRemove = (e) => {
    const { id } = e.currentTarget;
    dispatch(ACTION_DELETE_USER(id));
  };
  
  const  handleClickEdit = (e) => {
    const { id } = e.currentTarget;
    dispatch(ACTION_UPDATE_USER(id));
  };

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button id={user.id} onClick={handleClickEdit}>Редактировать</button>
          <button id={user.id} onClick={handleClickRemove}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default DataBlock;
