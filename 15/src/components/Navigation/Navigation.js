import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_CHANGE_PAGE } from '../../ducks/paginationsReducer/paginationsReducer';

import { 
    StyledLink, 
    StyledLi, 
    StyledUl 
} from './style';

function Navigation() {
    const dispatch = useDispatch();
    const link = useRef();

    const handleClick = (e) => {
    if(link.current !== e.target.textContent) {
        dispatch(ACTION_CHANGE_PAGE(1));
        link.current = e.target.textContent;
        }
    };

    return(
        <nav>
            <StyledUl onClick={handleClick}>
                <StyledLi><StyledLink to='/' ref={link}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to='/civilizations' ref={link}>Civilizations</StyledLink></StyledLi>
                <StyledLi><StyledLink to='/structures' ref={link}>Structures</StyledLink></StyledLi>
                <StyledLi><StyledLink to='/technologies' ref={link}>Technologies</StyledLink></StyledLi>
                <StyledLi><StyledLink to='/units' ref={link}>Units</StyledLink></StyledLi>
            </StyledUl>
        </nav>
    );
};

export default Navigation;