import { StyledLink } from "../../../styles/styled-components/base";
import { THotel } from "../../../redux/popularHotels/types";
import { Hotels, Hotel } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector } from "../../../redux/popularHotels/selectors";
import { useEffect } from "react";
import Slider from "react-slick";
import { hotelsTitle, settings } from "./config";
import { actionGetHotelsRequested } from "../../../redux/popularHotels/actions";

export function GetPopularHotels() {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  useEffect(() => {
    data === null && dispatch(actionGetHotelsRequested());
  }, [data]);

  return (
    <Hotels className="hotels block">
      <div className="container">
        <h2 className="title">{hotelsTitle}</h2>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </Hotels>
  );
}
