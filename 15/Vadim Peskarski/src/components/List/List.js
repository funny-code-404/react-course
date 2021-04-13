import { useEffect, useState, useRef } from 'react';
import { database } from '../../firebase';
import styled from 'styled-components';

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 280px;
  margin-bottom: 8px;
  & p {
    margin: 4px;
  }
`
const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-weight: bold;
  background: red;
  border: 2px solid black;
  border-radius: 4px;
`

const List = () => {
  const [data, setData] = useState({});
  const deleteRef = useRef();

  useEffect(() => {
    database()
      .ref('/PUSH_DATA')
      .on('value', (snapshot) => {
        setData(snapshot.val());
      });
  }, []);

  const handleClick = (e) => {
    deleteRef.current = database().ref('/PUSH_DATA');
    deleteRef.current.child(e.target.id).remove();
  }

  return (
    <ul>
      {data && Object.keys(data).map(element => {
        return (
          <ListItem key={element}>
            <div>
            <p>{data[element].name}</p>
            <p>{data[element].email}</p>
            </div>
            <DeleteButton onClick={handleClick} id={element}>X</DeleteButton>
          </ListItem>
        )
      })}
    </ul>
  )
}

export default List;
