import { Link } from "react-router-dom";
import {
  HeaderContainer,
  StyledHeader,
  StyledLogo,
  HeaderContent,
  StyledNav,
  StyledToggle,
  StyledUser,
  StyledLink,
  StyledMenuBurger,
} from "./styles";
import { TopSection } from "../TopSection";

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader className="container block">
        <StyledLogo />
        <HeaderContent>
          <StyledNav>
            <StyledLink to="/stays" className="nav__link">
              Stays
            </StyledLink>
            <StyledLink to="/stays" className="nav__link">
              Atractions
            </StyledLink>
          </StyledNav>
          <StyledToggle />
          <StyledUser />
          <StyledMenuBurger />
        </HeaderContent>
      </StyledHeader>
      <TopSection />
    </HeaderContainer>
  );
};
