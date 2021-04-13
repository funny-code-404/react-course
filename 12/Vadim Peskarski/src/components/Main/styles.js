import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: rgb(199, 187, 187);
`

export const NavItem = styled.p`
  font-size: 20px;

  :hover {
    font-weight: bold;
    cursor:pointer;
  }
`
