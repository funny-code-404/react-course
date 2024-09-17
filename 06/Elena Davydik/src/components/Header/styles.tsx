import styled from "styled-components";
import { LightTheme } from "../../styles/styled-components/LightTheme";
import { getFont } from "../../styles/styled-components/mixins";
import heroBg from "../../assets/backgrounds/hero-bg.png";
import logoLg from "../../assets/logo/logo-lg.svg";
import logoSm from "../../assets/logo/logo-sm.svg";
import toggleImg from "../../assets/icons/theme-toggle-night.svg";
import toggleImgActive from "../../assets/icons/theme-toggle-night-active.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import userIconActive from "../../assets/icons/user-icon-active.svg";
import menuBurger from "../../assets/icons/menu-burger.svg";
import menuBurgerActive from "../../assets/icons/menu-burger-active.svg";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 900px;
  background-image: url(${heroBg});
  background-size: cover;

  @media ${LightTheme.media.lg} {
    height: 640px;
  }
  @media ${LightTheme.media.sm} {
    height: auto;
  }
`;

export const StyledHeader = styled.header`
  padding-top: 51px;
  padding-bottom: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${LightTheme.media.lg} {
    padding-top: 31px;
    padding-bottom: 45px;
  }
  @media ${LightTheme.media.sm} {
    padding: 30px 16px;
  }
`;

export const HeaderContent = styled.div`
  width: 355px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${LightTheme.media.sm} {
    justify-content: right;
  }
`;

export const StyledLogo = styled.button`
  width: 205px;
  height: 40px;
  background: center no-repeat url(${logoLg});
  background-size: 205px 40px;
  border: none;
  cursor: pointer;
  @media ${LightTheme.media.sm} {
    background: center no-repeat url(${logoSm});
    background-size: 122px 24px;
  }
`;

export const StyledNav = styled.nav`
  width: 200px;
  ${getFont("lg", "regular", "lg")}
  color: ${LightTheme.colors.generalWhite};

  @media ${LightTheme.media.sm} {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  padding-bottom: 12px;
  margin: 0 12px;
  color: inherit;
  text-decoration: none;

  transition: all 1s;

  :hover {
    border-bottom: 4px solid ${LightTheme.colors.accentYellow};
    transition: all 0.3s;
  }
`;

export const StyledToggle = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 24px 0 48px;
  background: center no-repeat url(${toggleImg});
  border: none;
  cursor: pointer;

  :hover {
    background: center no-repeat url(${toggleImgActive});
  }

  @media ${LightTheme.media.sm} {
    margin: 0 16px 0 0;
    background-size: 16px 16px;
  }
`;

export const StyledUser = styled.button`
  width: 40px;
  height: 40px;
  background: center no-repeat url(${userIcon});
  border: none;
  cursor: pointer;

  :hover {
    background: center no-repeat url(${userIconActive});
  }
  @media ${LightTheme.media.sm} {
    background-size: 24px 24px;
    margin-right: 16px;
  }
`;

export const StyledMenuBurger = styled.button`
  width: 40px;
  height: 40px;
  background: center no-repeat url(${menuBurger});
  border: none;
  cursor: pointer;
  display: none;

  :hover {
    background: center no-repeat url(${menuBurgerActive});
  }

  @media ${LightTheme.media.sm} {
    display: block;
    background-size: 24px 16px;
  }
`;
