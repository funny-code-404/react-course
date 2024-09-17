import { useFetchData } from "../../hooks/useFetchData";
import { StyledLink } from "../../../styles/styled-components/base";
import { THotel } from "../../Types/types";
import { urlPopularHotels } from "./PopularHotels";
import { Hotels, Hotel } from "./styles";

const hotelsTitle = "Homes guests loves";

export function GetPopularHotels() {
  const { data } = useFetchData(urlPopularHotels);

  return (
    <Hotels className="hotels block">
      <div className="container">
        <h2 className="title">{hotelsTitle}</h2>
        <ul className="hotels__content">
          {data.map(({ id, name, city, country, imageUrl }: THotel) => (
            <StyledLink
              to="/hotel/${id}"
              state={{ id, name, city, country, imageUrl }}
            >
              <Hotel key={id} className="hotel">
                <img
                  src={imageUrl}
                  alt={name}
                  className="hotel__photo hover-effect"
                />
                <p className="hotel__name">{name}</p>
                <p className="hotel__location">
                  {city}, {country}
                </p>
              </Hotel>
            </StyledLink>
          ))}
        </ul>
      </div>
    </Hotels>
  );
}
