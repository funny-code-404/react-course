import styled from "styled-components";
import { getFontsFragment } from "../../utils/utils";

export const Hotels = styled.section`
    background: ${({ theme }) => theme.colors.bgColor};

    &:nth-last-of-type(1) {
        background: ${({ theme }) => theme.colors.bgColor2};
    }

    & .hotels__container {
        width: 100%;
        padding-bottom: 120px;
        padding-top: 120px;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            padding-bottom: 80px;
            padding-top: 80px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            padding-bottom: 40px;
            padding-top: 40px;
        }
    }

    & .hotels__title {
        margin-bottom: 100px;
        ${getFontsFragment('xxl')}
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        text-align: center;
        color: ${({ theme }) => theme.colors.titleColor};

        @media (max-width: ${({ theme }) => theme.media.large}) {
            margin-bottom: 65px;
            ${getFontsFragment('xl')}
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            margin-bottom: 35px;
        }
    }
`

export const Hotel = styled.article`
    max-width: max-content;

    & .hotel__image {
        max-width: 296px;
        min-width: 296px;
        height: 296px;
        object-fit: cover;
        margin-bottom: 24px;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            max-width: 220px;
            min-width: 220px;
            height: 220px;
            margin-bottom: 8px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            max-width: 156px;
            min-width: 156px;
            height: 156px;
        }
    }

    & .hotel__title {
        margin-bottom: 24px;
        ${getFontsFragment('lg')}
        color: ${({ theme }) => theme.colors.generalBlue};
        text-align: start;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            margin-bottom: 12px;
            ${getFontsFragment('md')}
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            ${getFontsFragment('xs')}
        }
    }

    & .hotel__subtitle {
        margin-bottom: 24px;
        ${getFontsFragment('lg')}
        color: ${({ theme }) => theme.colors.secondaryText};
        text-align: start;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            margin-bottom: 0;
            ${getFontsFragment('md')}
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            ${getFontsFragment('xs')}
        }
    }
`

export const StyledTitleNotFound = styled.h1`
    align-self: center;
`