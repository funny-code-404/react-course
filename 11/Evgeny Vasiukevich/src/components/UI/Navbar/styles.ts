import styled from "styled-components";

export const StyledNav = styled.nav<{isMenuClick: boolean}>`
    & .nav__container{
        display: flex;
        gap: 48px;
        margin-bottom: 20vh;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            gap: 32px;
            margin-bottom: 15vh;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            gap: 16px;
            margin-bottom: 7vh;
        }
    }

    & .nav__logo{
        width: 205px;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            width: 165px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            width: 125px;
        }
    }

    & .nav__menu{
        flex-grow: 1;
        display: flex;
        justify-content: end;
        gap: 24px;

        @media (max-width: ${({ theme }) => theme.media.small}) {
            position: fixed;
            z-index: 500;
            inset: 0 0 0 30%;
            flex-direction: column;
            justify-content: start;
            gap: 40px;
            padding: 60px 0 0 20px;
            margin: 0;
            background: ${({ theme }) => theme.colors.generalWhite};
            transform: translateX(100%);
            transition: transform 500ms ease-in-out;
            ${props => props.isMenuClick  ? 'transform: translateX(0);' : ''}
        }
    }

    & .nav__tools {
        position: relative;
        display: flex;
        justify-content: end;
        gap: 24px;

        @media (max-width: ${({ theme }) => theme.media.small}) {
            flex-grow: 1;
            gap: 16px;
        }
    }

    & .nav__toggle-theme {
        @media (max-width: ${({ theme }) => theme.media.large}) {
            width: 23px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            width: 16px;
        }
    }

    & .nav__login {
        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            width: 32px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            width: 24px;
        }
    }

    & .nav__mobile-menu {
        display: none;

        @media (max-width: ${({ theme }) => theme.media.small}) {
            z-index: 2000;
            display: block;
        }
    }
`

export const StyledMenu = styled.div`
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