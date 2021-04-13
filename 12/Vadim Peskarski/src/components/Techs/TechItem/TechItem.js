import { useParams } from 'react-router-dom';
import { technologies } from '../../../ducks/techs/selectors';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Name } from '../../../styles/styles';

const TechItem = () => {
  const { id } = useParams();
  const techsArr = useSelector(technologies);
  const history = useHistory();
  const [data] = techsArr.technologies.filter(element => String(element.id) === id);
  const { name, age, cost, description, expansion, build_time } = data;

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
      <h4>Cost:</h4>
      <div>
        {Object.keys(cost).map((element, index) => <p key={index}>{element}</p>)}
        {Object.values(cost).map((element, index) => <p key={index}>{element}</p>)}
      </div>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default TechItem;
