import styled from "styled-components";
import {
  HeaderContainer,
  HeaderContent,
  StyledHeader,
  StyledLogo,
  StyledNav,
  StyledLink,
  StyledToggle,
  StyledUser,
} from "../../components/Header/styles";
import { LightTheme } from "../../styles/styled-components/LightTheme";

export const HeaderForPages = () => {
  return (
    <HeaderForPagesStyled>
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
          </HeaderContent>
        </StyledHeader>
      </HeaderContainer>
    </HeaderForPagesStyled>
  );
};

const HeaderForPagesStyled = styled.div`
  height: 150px;
  overflow: hidden;

  @media ${LightTheme.media.lg} {
    height: 100px;
  }
`;
