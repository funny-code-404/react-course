import data from "../../../data";
import Card from "../Card";

type Hotels = {
  id: string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
};

type Props = {
  cards: Hotels[];
};

function Hotels({ cards }: Props) {
  return (
    <>
      {cards.length ? (
        <ul className="slider__cards cards">
          {cards.map((card: Hotels) => (
            <Card
              id={card.id}
              imageUrl={card.imageUrl}
              country={card.country}
              city={card.city}
              name={card.name}
            />
          ))}
        </ul>
      ) : (
        <h3 className="cards__not__found">
          Destination or hotel not found.
        </h3>
      )}
    </>
  );
}
export default Hotels;
