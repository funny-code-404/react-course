import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { mainColor } from '../../globalStyle';




const StyledLink = styled(Link)`
    position: relative;
    text-decoration: none;
    color: black;
    &:before {
        content: '';
        position: absolute;
        transition: transform .5s ease;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: ${mainColor};
        transform:  scaleX(0);
    }
    &:hover:before {
        transform:  scaleX(1);
    }
`;

const StyledLi = styled.li`
    list-style: none;
`;

const StyledUl = styled.ul`
    display: flex;
    justify-content: space-evenly;
    padding: 1.5em;
    border-bottom: 1px solid rgba(57, 150, 54, 0.25);
`;

export { StyledLink, StyledLi, StyledUl };