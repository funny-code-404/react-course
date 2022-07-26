import styled from "styled-components";
import backgroundDark from '../../assets/backgrounds/bg-homepage-dark.jpg';
import backgroundLight from '../../assets/backgrounds/bg-homepage-light.jpg';
import { ThemeEnum } from "../../interfaces/styled";
import { getFontsFragment } from "../../utils/utils";

export const StyledHeader = styled.header<{ themeBg: ThemeEnum }>`
    height: 100vh;
    padding-top: 5vh;
    background: url(${props => props.themeBg === ThemeEnum.LIGHT ? backgroundLight : backgroundDark}) no-repeat center;
    background-size: cover;

    @media (max-width: ${({ theme }) => theme.media.large}) {
        padding-top: 3vh;
    }

    @media (max-width: ${({ theme }) => theme.media.small}) {
        padding-top: 2vh;
    }
`

export const StyledTitle = styled.h1`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin-bottom: 16vh;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: 50px;
    line-height: 59px;
    color: ${({ theme }) => theme.colors.generalWhite};

    @media (max-width: ${({ theme }) => theme.media.large}) {
        ${getFontsFragment('xxl')}
    }

    @media (max-width: ${({ theme }) => theme.media.small}) {
        ${getFontsFragment('xl')}
        margin-bottom: 5vh;
    }
`