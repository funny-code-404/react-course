import { useFetchData } from "../../hooks/useFetchData";
import { THotel } from "../../Types/types";
import { urlPopularHotels } from "./PopularHotels";

const hotelsTitle = "Homes guests loves";

export function GetPopularHotels() {
  const { data } = useFetchData(urlPopularHotels);

  return (
    <div className="hotels block">
      <div className="container">
        <h2 className="title">{hotelsTitle}</h2>
        <ul className="hotels__content">
          {data.map(({ id, name, city, country, imageUrl }: THotel) => (
            <li key={id} className="hotel">
              <img src={imageUrl} alt={name} className="hotel__photo" />
              <p className="hotel__name">{name}</p>
              <p className="hotel__location">
                {city}, {country}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
