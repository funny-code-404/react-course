import { units } from '../../ducks/units/selectors';
import { addUnitsRequested } from '../../ducks/units/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { List, ListItem } from '../../styles/styles';

const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1'

const Units = () => {
  const data = useSelector(units);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const path = url + pathname;
  const history = useHistory();

  useEffect(() => {
    dispatch(addUnitsRequested(path));
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
        {data.units &&
          data.units.map(element => {
            return (
              <ListItem key={element.id} id={element.id} onClick={handleClick}>{element.name}</ListItem>
            )
          })}
      </List>
      <button onClick={handleBackClick}>Back</button>
    </div>
  )
}

export default Units;
