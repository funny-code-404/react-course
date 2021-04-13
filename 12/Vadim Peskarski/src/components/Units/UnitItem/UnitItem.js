import { useParams } from 'react-router-dom';
import { units } from '../../../ducks/units/selectors';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Name, Cost } from '../../../styles/styles';

const UnitItem = () => {
  const { id } = useParams();
  const unitsArr = useSelector(units);
  const history = useHistory();
  const [data] = unitsArr.units.filter(element => String(element.id) === id);
  const { name, age, description, cost, build_time, expansion, hit_points, line_of_sight, armor, attack, accuracy } = data;

  const handleClick = () => {
    history.goBack();
  }

  return (
    <div>
      <Name>{name}</Name>
      <h4>{'Age: ' + age}</h4>
      <h4>{'Description: ' + description}</h4>
      <h4>{'Expansion: ' + expansion}</h4>
      <h4>{'Build time: ' + build_time}</h4>
      <h4>{'Hit points: ' + hit_points}</h4>
      <h4>{'Line of sight: ' + line_of_sight}</h4>
      <h4>{'Armor: ' + armor}</h4>
      <h4>{'Attack: ' + attack}</h4>
      <h4>{'Accuracy: ' + accuracy}</h4>
      <h4>Cost:</h4>
      <Cost>
        <div>{Object.keys(cost).map((element, index) => <p key={index}>{element}</p>)}</div>
        <div>{Object.values(cost).map((element, index) => <p key={index}>{element}</p>)}</div>
      </Cost>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default UnitItem;
