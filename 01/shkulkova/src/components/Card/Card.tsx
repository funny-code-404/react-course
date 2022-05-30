type Props = {
  id: string;
  image: string;
  name: string;
  city: string;
  country: string;
};

export function Card({ id, image, name, city, country }: Props) {
  return (
    <li className="cards__item" key={id}>
      <img className="item item__image" src={image} alt="#" />
      <p className="item item__name">{name}</p>
      <p className="item item__location">
        {city}, {country}
      </p>
    </li>
  );
}
