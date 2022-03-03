import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_USERS_DATA_REQUESTED } from '../../ducks/users/actions';
import { usersDataSelector } from '../../ducks/users/selectors';

function DataList() {
  const dispatch = useDispatch();
  const usersData = useSelector(usersDataSelector);

  const handleClick = () => dispatch(ACTION_GET_USERS_DATA_REQUESTED());

  return (
    <div className="App">
      <button onClick={handleClick}> Get data</button>
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>{user.companyName.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
