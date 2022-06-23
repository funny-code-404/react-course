import styled from "styled-components";
import background from '../../assets/backgrounds/bg-homepage.jpg';
import { getFontsFragment } from "../../utils/utils";

export const StyledHeader = styled.header`
    height: 100vh;
    padding-top: 5vh;
    background: url(${background}) no-repeat center;
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