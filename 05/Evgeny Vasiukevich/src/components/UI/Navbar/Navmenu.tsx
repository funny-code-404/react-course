import styled from 'styled-components';

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
        color: ${({ theme }) => theme.colors.generalWhite};
        background-color: transparent;

        @media (max-width: ${({ theme }) => theme.media.small}) {
            color: ${({ theme }) => theme.colors.textColor}
        }
    }

    & .nav__link:hover {
        border-bottom: 4px solid #fadea0;
    }

    & .nav__link--active {
        border-bottom: 4px solid ${({ theme }) => theme.colors.acceptYellow};
    }
`

export default Navmenu;