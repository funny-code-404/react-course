import styled from "styled-components";
import { LightTheme } from "../styles/styled-components/LightTheme";
import { getFont } from "../styles/styled-components/mixins";

export const HotelInfo = styled.div`
  background: ${LightTheme.colors.mainBackground};
`;

export const HotelContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${LightTheme.media.sm} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HotelPhoto = styled.img`
  width: 500px;
  height: 500px;
  @media ${LightTheme.media.lg} {
    width: 400px;
    height: 400px;
  }
  @media ${LightTheme.media.md} {
    width: 300px;
    height: 300px;
  }
  @media ${LightTheme.media.sm} {
    width: 400px;
    height: auto;
  }
`;

export const HotelDescription = styled.div`
  width: 500px;
  height: 500px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  background: ${LightTheme.colors.generalWhite};

  @media ${LightTheme.media.lg} {
    width: 400px;
    height: 400px;
  }

  @media ${LightTheme.media.md} {
    width: 300px;
    height: 300px;
  }
  @media ${LightTheme.media.sm} {
    max-width: 400px;
    width: 100%;
    height: auto;
  }
`;

export const HotelName = styled.h2`
  padding-bottom: 60px;
  ${getFont("xxl", "regular", "xxl")};
  color: ${LightTheme.colors.accentBlue};
  border-bottom: 4px solid ${LightTheme.colors.accentYellow};

  @media ${LightTheme.media.md} {
    margin: 16px 0;
    padding-bottom: 30px;
    ${getFont("xl", "regular", "xl")};
  }

  @media ${LightTheme.media.sm} {
    margin: 8px 0;
    padding-bottom: 20px;
    ${getFont("mobileLg", "regular", "mobileLg")};
  }

  @media ${LightTheme.media.xs} {
    margin: 8px 0 4px 0;
    ${getFont("mobileSm", "regular", "mobileSm")};
  }
`;

export const HotelLocation = styled.p`
  padding-top: 60px;
  ${getFont("xl", "regular", "xl")};
  color: ${LightTheme.colors.secondaryText};

  @media ${LightTheme.media.md} {
    padding-top: 30px;
    ${getFont("lg", "regular", "xl")};
  }

  @media ${LightTheme.media.sm} {
    padding-top: 20px;
    ${getFont("mobileMd", "regular", "mobileMd")};
  }

  @media ${LightTheme.media.xs} {
    ${getFont("mobileXs", "regular", "mobileXs")};
  }
`;
