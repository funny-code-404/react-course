import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import styled from 'styled-components';

const CarBlock = styled.div`
  width: 30%;
  font-weight: bold;
`


export const Car = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);

  const carInfo = data.find((element) => {
    return (element.id == id) ? element : null;
  });

  return (id ?
    <CarBlock>
      <h3>{carInfo.name}</h3>
      <p>Мощность - {Math.round(carInfo.avg_horsepower)}</p>
      <p>Цена - {Math.round(carInfo.avg_price)} $</p>
      <img src={carInfo.img_url} alt="картинка не прогрузилась" />
    </CarBlock>
    : <></>
  )
}
export default Car;
