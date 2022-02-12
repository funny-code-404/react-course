import { useSelector, useDispatch } from 'react-redux';
import { dataSelector } from '../../ducks/users';
import { ACTION_DELETE_USER, ACTION_UPDATE_USER } from '../../ducks/users';
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
    const { id } = target

    data.forEach(function (el, i) {
      if (el.id === id) data.splice(i, 1)
    })
    dispatch(ACTION_DELETE_USER(data));
  };


  const handleClickUpdate = ({ target }) => {
    const { id } = target

    data.forEach(function (el) {
      if (el.id === id) el.isEdit = !el.isEdit
    })

    dispatch(ACTION_UPDATE_USER(data))
  };


  const handleChange = ({ target }) => {
    const { id } = target
    data.forEach(function (el) {

      if (el.id === id) el[target.name] = [target.value]
    })

    dispatch(ACTION_UPDATE_USER(data))
  };



  return (
    <ul>
      {data.map((user) => (
        <Wrapper key={user.id}>
          {!user.isEdit ? <>
            <button id={user.id} onClick={handleClickDelete}>Delete</button>
            <button id={user.id} onClick={handleClickUpdate}>Update</button>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </> : <>
            <input id={user.id} name="name" value={user.name} onChange={handleChange} />
            <input id={user.id} name="email" value={user.email} onChange={handleChange} />
            <button id={user.id} onClick={handleClickUpdate}>Ready</button></>
          }
        </Wrapper>
      ))}
    </ul>
  );
};

export default DataBlock;
