import styled from "styled-components";
import { LightTheme } from "../../../styles/styled-components/LightTheme";
import { getFont } from "../../../styles/styled-components/mixins";

export const Hotels = styled.div`
  background: ${LightTheme.colors.mainBackground};

  .hotels__content {
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
  }
`;

export const Hotel = styled.li`
  max-width: 296px;
  width: 100%;
  max-height: 436px;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  @media ${LightTheme.media.xs} {
    width: 156px;
  }

  .hotel__photo {
    max-width: 296px;
    width: 100%;
    max-height: 296px;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    overflow: hidden;
  }

  .hotel__name {
    margin: 24px 0;
    ${getFont("lg", "regular", "lg")};
    color: ${LightTheme.colors.accentBlue};

    @media ${LightTheme.media.md} {
      margin: 16px 0;
      ${getFont("md", "regular", "md")};
    }

    @media ${LightTheme.media.sm} {
      margin: 8px 0;
      ${getFont("mobileXs", "regular", "mobileXs")};
    }

    @media ${LightTheme.media.xs} {
      margin: 8px 0 4px 0;
      ${getFont("xxxs", "regular", "xxxs")};
    }
  }

  .hotel__location {
    ${getFont("lg", "regular", "lg")};
    color: ${LightTheme.colors.secondaryText};

    @media ${LightTheme.media.md} {
      ${getFont("md", "regular", "md")};
    }

    @media ${LightTheme.media.sm} {
      ${getFont("mobileXs", "regular", "mobileXs")};
    }

    @media ${LightTheme.media.xs} {
      ${getFont("xxxs", "regular", "xxxs")};
    }
  }

  .hover-effect {
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .hover-effect:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`;
