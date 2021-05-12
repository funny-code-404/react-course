import DataContext from '../context/DataContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CatContainer, CatTitle, CatDetails, CatImg, CatInfo, CatP, Span } from './style';

const CatsItem = () => {
  const { dataCat } = useContext(DataContext);
  let { id } = useParams();

  const targetItem = dataCat.find((item)=> {
    return item.id === id;
  });

  const { name, image, description, origin, weight, life_span, temperament } = targetItem;

  return (
    <CatContainer>
      <CatTitle>{name}</CatTitle>
      <CatDetails>
        <CatImg src={image.url} alt={`Cat breed ${name}`}></CatImg>
        <CatInfo>
          <CatP>{description}</CatP>
          <CatP> This breed comes from <Span>{origin}</Span>.</CatP>
          <CatP>Weight rate: <Span>{weight.metric} kg</Span>.</CatP>
          <CatP>Average life length: <Span>{life_span} years</Span>.</CatP> 
          <CatP>{temperament}.</CatP>
        </CatInfo>
      </CatDetails>
    </CatContainer>
  )
}

export default CatsItem;