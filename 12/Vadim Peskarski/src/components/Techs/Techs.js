import { technologies } from '../../ducks/techs/selectors';
import { addTechsRequested } from '../../ducks/techs/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { List, ListItem } from '../../styles/styles';

const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1'

const Techs = () => {
  const data = useSelector(technologies);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const path = url + pathname;
  const history = useHistory();

  const handleClick = (e) => {
    history.push(`${pathname}/${e.target.id}`);
  }

  const handleBackClick = () => {
    history.goBack();
  }

  useEffect(() => {
    dispatch(addTechsRequested(path));
  }, []);

  return (
    <div>
      <List>
        {data.technologies &&
          data.technologies.map(element => {
            return (
              <ListItem key={element.id} id={element.id} onClick={handleClick}>{element.name}</ListItem>
            )
          })}
      </List>
      <button onClick={handleBackClick}>Back</button>
    </div>
  )
}

export default Techs;
