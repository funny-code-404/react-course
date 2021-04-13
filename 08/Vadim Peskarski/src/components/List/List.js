import { useContext } from 'react';
import DataContext from '../../context/DataContext.js';
import { useHistory } from 'react-router-dom';
import Car from '../Car/Car.js';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

const ListBlock = styled.ul`
  width: 60%;
`

const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 4px;
  width: 300px;
  height: 35px;
  font-size: 15px;
  line-height: 8px;
  font-weight: bold;

  :hover {
    color: white;
    background-color: grey;
  }
`

const List = () => {
  const { data } = useContext(DataContext);
  let history = useHistory();

  const onClick = (e) => {
    history.push(`/${e.currentTarget.id}`);
  }

  return (data &&
    <Container>
      <ListBlock>
        {data.map(element => (
          <ListItem key={element.id} id={element.id} onClick={onClick}>
            <p>{element.name}</p>
          </ListItem>
        ))}
      </ListBlock>
      <Car />
    </Container>
  )
}

export default List;
