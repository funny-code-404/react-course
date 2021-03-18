import { useParams } from 'react-router-dom';
import { civilizations } from '../../../ducks/civilizations/selectors';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Name } from '../../../styles/styles';

const Civilization = () => {
  const { id } = useParams();
  const civsArr = useSelector(civilizations);
  const history = useHistory();
  const [data] = civsArr.civilizations.filter(element => String(element.id) === id);
  const { name, army_type, civilization_bonus, team_bonus, expansion } = data;

  const handleClick = (e) => {
    history.goBack();
  }

  return (
    <div>
      <Name>{name}</Name>
      <h4>{'Army Type: ' + army_type}</h4>
      <h4>{'Expansion: ' + expansion}</h4>
      <h4>{'Team bonus: ' + team_bonus}</h4>
      <h4>Civilization bonuses: </h4>
      <ul>
        {civilization_bonus.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default Civilization;
