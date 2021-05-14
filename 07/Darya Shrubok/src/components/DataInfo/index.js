import { useLocation, useParams } from "react-router-dom";

const DataInfo = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const car = state.data.find((item) => item.id == id);

  return (
    Boolean(car) && (
      <div className="info">
        <h1>Название: {car.make + " " + car.model}</h1>
        <h2>Цена: {car.price}</h2>
        <h2>Мощность: {car.horsepower}</h2>
        <img src={car.img_url} alt="logo"/>
      </div>
    )
  );
};

export default DataInfo;
