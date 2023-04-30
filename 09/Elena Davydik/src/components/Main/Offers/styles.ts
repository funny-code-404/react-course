import styled from "styled-components";
import { LightTheme } from "../../../styles/styled-components/LightTheme";
import { getFont } from "../../../styles/styled-components/mixins";

export const StyledOffers = styled.div``;
export const Items = styled.div`
  display: flex;
  flex-direction: row;
  @media ${LightTheme.media.sm} {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  width: 296px;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${LightTheme.media.sm} {
    width: 214px;
    height: 104px;
    margin: 0 auto;
    margin-bottom: 32px;
  }
`;
export const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: auto;

  @media ${LightTheme.media.lg} {
    width: 70px;
    height: 70px;
  }
`;
export const Subtitle = styled.h3`
  text-align: center;
  ${getFont("lg", "regular", "lg")}
  @media ${LightTheme.media.lg} {
    ${getFont("md", "regular", "md")}
  }
  @media ${LightTheme.media.md} {
    ${getFont("sm", "regular", "sm")}
  }
  @media ${LightTheme.media.sm} {
    ${getFont("mobileXs", "regular", "mobileXs")}
  }
`;
