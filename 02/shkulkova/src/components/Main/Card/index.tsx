type Props = {
  id: string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
};


const Card = ({ id, imageUrl, name, country, city }: Props) => (
  <li className="cards__item" key={id}>
    <img className="item item__image" src={imageUrl} alt="#" />
    <p className="item item__name">{name}</p>
    <p className="item item__location">
      {city}, {country}
    </p>
  </li>
);
  

export default Card;
