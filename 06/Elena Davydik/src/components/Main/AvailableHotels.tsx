import { StyledLink } from "../../styles/styled-components/base";
import { ReactNode, useContext } from "react";
import { SearchHotelsContext } from "../context/SearchHotelsContext/SearchHotelsContext";
import { THotel } from "../Types/types";
import { Hotel } from "./PopularHotels/styles";
import styled from "styled-components";
import { LightTheme } from "../../styles/styled-components/LightTheme";
import { getFont } from "../../styles/styled-components/mixins";

const AvailableHotelsTitle = "Available hotels";

export const AvailableHotels = () => {
  const { data, isClickedSearch, value } = useContext(SearchHotelsContext);
  if (isClickedSearch && data.length > 0) {
    return (
      <StyledAvailableHotels className="block container">
        <h2 className="title">{AvailableHotelsTitle}</h2>
        <HotelsContent>
          {data.map(
            ({ id, name, city, country, imageUrl }: THotel): ReactNode => {
              return (
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
              );
            }
          )}
        </HotelsContent>
      </StyledAvailableHotels>
    );
  } else if (isClickedSearch && value && data.length === 0) {
    return (
      <div className="searchForm__list block">
        <div className="container">
          <NotFoundTitle>Hotel not found.</NotFoundTitle>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const StyledAvailableHotels = styled.div`
  background: ${LightTheme.colors.generalWhite};
`;

const HotelsContent = styled.ul`
  display: grid;
  align-self: center;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  overflow: hidden;

  @media ${LightTheme.media.xl} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${LightTheme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NotFoundTitle = styled.h3`
  padding: 64px 0;
  ${getFont("lg", "regular", "lg")};
  color: ${LightTheme.colors.mainText};
  text-align: center;

  @media ${LightTheme.media.sm} {
    ${getFont("mobileMd", "regular", "mobileMd")};
  }
`;
