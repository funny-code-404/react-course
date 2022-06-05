import styled from "styled-components";

export const StyledNav = styled.nav`
    & .nav__container{
        display: flex;
        gap: 48px;
    }

    & .nav__logo{
        width: 205px;
    }

    & .nav__menu{
        flex-grow: 1;
        display: flex;
        gap: 24px;
    }

`