import {NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkElem = styled(NavLink)`
        color:black;
        text-decoration: none;
        padding: 5px 15px;

        &:hover {
         background-color: rgba(223, 238, 182, 0.788);
         border-radius: 5px;
        }
`;

const Navigation = () => (
  <nav >
    <LinkElem  to='/'>На страницу контактов</LinkElem>
  </nav>
);

export default Navigation;
