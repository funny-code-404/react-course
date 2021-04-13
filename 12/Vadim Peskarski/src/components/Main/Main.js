import { useHistory } from 'react-router-dom';
import { NavBar, NavItem } from './styles';

const Main = () => {
  const nav = [
    'civilizations',
    'units',
    'structures',
    'technologies'
  ];

  const history = useHistory();

  const handleClick = (e) => {
    history.push('/');
    history.push(e.target.dataset.value);
  }

  return (
    <NavBar>
      {nav.map((element, index) => (
        <NavItem key={index} data-value={element} onClick={handleClick}>{element}</NavItem>
      ))}
    </NavBar>
  )
}

export default Main;
