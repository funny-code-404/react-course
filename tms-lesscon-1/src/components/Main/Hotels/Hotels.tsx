import data from "../../../data";
import { Card } from "../Card/Card";

function Hotels() {
  return (
    <>
      <h2 className=" slider__title">Homes guests loves</h2>
      <ul className="slider__cards cards">
        {data.map((info) => (
          <Card
            id={info.id}
            image={info.imageUrl}
            country={info.country}
            city={info.city}
            name={info.name}
          />
        ))}
      </ul>
    </>
  );
}
export default Hotels;
