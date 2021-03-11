import styled from 'styled-components';
import { mainColor } from '../../globalStyle';

const StyledUl = styled.ul`
li {
   a {  
        display: inline-block;
        transition: all 0.5s;               
        &:hover {
            transform: scale(1.2);
            color: ${mainColor};
        }
    } 
}  
`;


export { StyledUl };