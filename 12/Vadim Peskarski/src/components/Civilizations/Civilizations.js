import { civilizations } from '../../ducks/civilizations/selectors';
import { addCivsRequested } from '../../ducks/civilizations/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { List, ListItem } from '../../styles/styles';

const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1'

const CivilizationItem = () => {
  const data = useSelector(civilizations);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const path = url + pathname;
  useEffect(() => {
    dispatch(addCivsRequested(path));
  }, []);

  const history = useHistory();

  const handleClick = (e) => {
    history.push(`${pathname}/${e.target.id}`);
  }

  const handleBackClick = () => {
    history.goBack();
  }

  return (
    <div>
      <List>
        {data.civilizations &&
          data.civilizations.map(element => {
            return (
              <ListItem key={element.id} onClick={handleClick} id={element.id}>{element.name}</ListItem>
            )
          })}
      </List>
      <button onClick={handleBackClick}>Back</button>
    </div>
  )
}

export default CivilizationItem;
