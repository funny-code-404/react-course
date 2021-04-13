import { structures } from '../../ducks/structures/selectors';
import { addStructuresRequested } from '../../ducks/structures/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { List, ListItem } from '../../styles/styles';

const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1'

const Structures = () => {
  const data = useSelector(structures);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const path = url + pathname;
  const history = useHistory();

  useEffect(() => {
    dispatch(addStructuresRequested(path));
  }, []);

  const handleClick = (e) => {
    history.push(`${pathname}/${e.target.id}`);
  }

  const handleBackClick = () => {
    history.goBack();
  }

  return (
    <div>
      <List>
        {data.structures &&
          data.structures.map(element => {
            return (
              <ListItem key={element.id} onClick={handleClick} id={element.id}>{element.name}</ListItem>
            )
          })}
      </List>
      <button onClick={handleBackClick}>Back</button>
    </div>
  )
}

export default Structures;
