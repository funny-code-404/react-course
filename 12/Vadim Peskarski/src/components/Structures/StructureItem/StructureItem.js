import { useParams } from 'react-router-dom';
import { structures } from '../../../ducks/structures/selectors';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Name } from '../../../styles/styles';

const StructureItem = () => {
  const { id } = useParams();
  const structuresArr = useSelector(structures);
  const history = useHistory();
  const [data] = structuresArr.structures.filter(element => String(element.id) === id);
  const { name, age, cost, build_time, expansion, hit_points, line_of_sight, armor } = data;

  const handleClick = () => {
    history.goBack();
  }

  return (
    <div>
      <Name>{name}</Name>
      <h4>{'Age: ' + age}</h4>
      <h4>{'Expansion: ' + expansion}</h4>
      <h4>{'Build time: ' + build_time}</h4>
      <h4>{'Hit points: ' + hit_points}</h4>
      <h4>{'Line of sight: ' + line_of_sight}</h4>
      <h4>{'Armor: ' + armor}</h4>
      <h4>Cost:</h4>
      <div>
        {Object.keys(cost).map((element, index) => <p key={index}>{element}</p>)}
        {Object.values(cost).map((element, index) => <p key={index}>{element}</p>)}
      </div>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default StructureItem;
