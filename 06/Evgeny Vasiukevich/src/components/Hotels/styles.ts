import styled from "styled-components";
import { getFontsFragment } from "../../utils/utils";

export const Hotels = styled.section`
    background: ${({ theme }) => theme.colors.bgColor};

    & ~ & {
        background: ${({ theme }) => theme.colors.generalWhite};
    }

    & .hotels__container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 120px;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            padding-bottom: 80px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            padding-bottom: 40px;
        }
    }

    & .hotels__title {
        margin: 100px 0;
        ${getFontsFragment('xxl')}
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        text-align: center;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            margin: 65px 0;
            ${getFontsFragment('xl')}
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            margin: 35px 0;
        }
    }

    & .hotels__items {
        display: flex;
        gap: 16px;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`

export const Hotel = styled.article`
    & .hotel__image {
        max-width: 296px;
        min-width: 296px;
        height: 296px;
        object-fit: cover;
        margin-bottom: 24px;

        @media (max-width: ${({ theme }) => theme.media.medium}) {
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

        @media (max-width: ${({ theme }) => theme.media.medium}) {
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

        @media (max-width: ${({ theme }) => theme.media.medium}) {
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