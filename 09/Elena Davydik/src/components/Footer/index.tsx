import styled from "styled-components";
import { LightTheme } from "../../styles/styled-components/LightTheme";
import { getFont } from "../../styles/styled-components/mixins";
import { About } from "./About";
import { Property } from "./Property";
import { Support } from "./Support";
import { config } from "./config";

export const Footer = () => {
  return (
    <StyledFooter className="block">
      <FooterNav className="container">
        <About />
        <Property />
        <Support />
      </FooterNav>
      <License className="container">{config.licenseTitle}</License>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  max-width: 1440px;
  height: 630px;
  background-color: ${LightTheme.colors.generalBlue};

  @media ${LightTheme.media.lg} {
    height: 470px;
  }
  @media ${LightTheme.media.sm} {
    width: 100%;
    height: auto;
  }
`;

const FooterNav = styled.div`
  margin-bottom: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${LightTheme.media.sm} {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const StyledList = styled.ul`
  width: 250px;
  color: ${LightTheme.colors.generalWhite};

  .list__title {
    margin-bottom: 12px;
    ${getFont("md", "medium", "md")};

    @media ${LightTheme.media.sm} {
      margin-top: 0;
    }
  }

  @media ${LightTheme.media.sm} {
    width: 100%;
    height: auto;
    margin: 12px 0;
    border-bottom: 2px solid ${LightTheme.colors.generalWhite};
    .active {
      visibility: hidden;
      height: 0;
      -webkit-transform: scaleY(0);
      -ms-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
      transition-duration: 1s;
    }
    :hover .active {
      visibility: visible;
      height: auto;
      -webkit-transform: scaleY(1);
      -ms-transform: scaleY(1);
      transform: scaleY(1);
      transition-duration: 1s;
    }
  }
`;

export const StyledListItem = styled.li`
  margin: 12px 0;
  ${getFont("md", "regular", "md")};

  :not(:last-child) {
    @media ${LightTheme.media.sm} {
      height: 30px;
      margin: 6px 0;
      border-bottom: 0.5px solid ${LightTheme.colors.generalWhite};
    }
  }
`;

const License = styled.span`
  ${getFont("xxs", "regular", "xxs")};
  color: ${LightTheme.colors.generalWhite};
`;
