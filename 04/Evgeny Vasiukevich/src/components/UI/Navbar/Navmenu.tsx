import React from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';

const Navmenu = () => {
    return (
        <StyledMenu className='nav__menu'>
            <span><a className='nav__link nav__link--active'>Stays</a></span>
            <span><a className='nav__link'>Attractions</a></span>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
    display: flex;
    gap: 24px;

    & .nav__link {
        cursor: pointer;
        padding-bottom: 12px;
        font-size: 24px;
        line-height: 28px;
        background-color: transparent;
    }

    & .nav__link:hover {
        border-bottom: 4px solid #fcebc6;
    }

    & .nav__link--active {
        border-bottom: 4px solid ${baseTheme.colors.acceptYellow};
    }
`

export default Navmenu;