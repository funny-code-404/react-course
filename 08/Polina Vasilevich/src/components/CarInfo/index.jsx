import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import classnames from "classnames";
import DataContext from "../Context/dataContext";
import errorImg from "../../assets/img/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";

import { ContainerCarInfo, ErrorImg } from "./styles";

const CarInfo = () => {
  const data = useContext(DataContext);
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(true);

  const car = data.find((item) => item.id.toString() === id);

  if (!car) {
    return null;
  }

  return (
    <ContainerCarInfo>
      <h2>{car.name[0].toUpperCase() + car.name.slice(1).toLowerCase()}</h2>
      <p>Price: {Math.round(car.avg_price)}</p>
      <p>Horsepower: {Math.round(car.avg_horsepower)}</p>

      <img
        src={car.img_url}
        alt="Not loaded"
        onError={() => setIsLoaded(false)}
        onLoad={() => setIsLoaded(true)}
        className={classnames({ isHidden: !isLoaded })}
      />
      {!isLoaded && <ErrorImg img={errorImg} />}
    </ContainerCarInfo>
  );
};

export default CarInfo;
