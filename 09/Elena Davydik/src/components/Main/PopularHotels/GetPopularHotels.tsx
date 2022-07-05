import { StyledLink } from "../../../styles/styled-components/base";
import { THotel } from "../../../redux/popularHotels/types";
import { Hotels, Hotel } from "./styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dataSelector } from "../../../redux/popularHotels/selectors";
import { useEffect } from "react";
import { getHotelsData } from "../../../redux/popularHotels/middlewares";

const urlPopularHotels =
  "https://fe-student-api.herokuapp.com/api/hotels/popular";
const hotelsTitle = "Homes guests loves";

export function GetPopularHotels() {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  useEffect(() => {
    dispatch(getHotelsData(urlPopularHotels) as any);
  }, []);

  return (
    <Hotels className="hotels block">
      <div className="container">
        <h2 className="title">{hotelsTitle}</h2>
        <ul className="hotels__content">
          {data?.map(({ id, name, city, country, imageUrl }: THotel) => (
            <StyledLink
              to="/hotel/${id}"
              state={{ id, name, city, country, imageUrl }}
              key={id}
            >
              <Hotel className="hotel">
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
