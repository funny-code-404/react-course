import { useSelector, useDispatch } from 'react-redux';
import { dataSelector } from '../../ducks/users';
import { ACTION_DELETE_USER, ACTION_SHOW_FORM_UPDATE_USER } from '../../ducks/users';
import { v4 as uuidv4 } from 'uuid';
import FormEdit from '../FormEdit';
import styled from 'styled-components';

const Wrapper = styled.li`
width:30%;
padding: 10px;
border: 1px blue solid;
border-radius: 10px;
`

const DataBlock = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  const handleClickDelete = ({ target }) => {
    dispatch(ACTION_DELETE_USER(target.id));
  };

  // показать/спрятать inputs для обновления данных
  const handleClickUpdate = ({ target }) => {
    dispatch(ACTION_SHOW_FORM_UPDATE_USER(target.id))
  };

  return (
    <ul>
      {data.map((user) => (
        <Wrapper key={uuidv4()}>
          {!user.isEdit ? <>
            <button id={user.id} onClick={handleClickDelete}>Delete</button>
            <button id={user.id} onClick={handleClickUpdate}>Update</button>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </> : <FormEdit id={user.id} name={user.name} email={user.email} />
          }
        </Wrapper>
      ))}
    </ul>
  );
};

export default DataBlock;
