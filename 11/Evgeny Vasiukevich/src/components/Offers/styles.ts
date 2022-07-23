import styled from "styled-components";
import { getFontsFragment } from "../../utils/utils";

export const StyledOffers = styled.section<{ themeState: boolean }>`
    padding-top: 120px;
    background: ${({ theme }) => theme.colors.bgColor2};

    @media (max-width: ${({ theme }) => theme.media.large}) {
        padding-top: 70px;
    }

    @media (max-width: ${({ theme }) => theme.media.small}) {
        padding-top: 24px;
    }

    & .offers__container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    & .offers__title {
        position: relative;
        margin-bottom: 104px;
        ${getFontsFragment('xxl')};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        color: ${({ theme }) => theme.colors.titleColor};
        text-align: center;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            margin-bottom: 64px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            margin-bottom: 32px;
            ${getFontsFragment('xl')};
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: calc(50% - 50px);
            height: 4px;
            width: 100px;
            background: ${({ theme }) => theme.colors.acceptYellow};

            @media (max-width: ${({ theme }) => theme.media.small}) {
                display: none;
            }
        }
    }

    & .offers {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 120px;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            flex-direction: column;
            align-items: center;
            gap: 32px;
            margin-bottom: 80px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            margin-bottom: 40px;
        }
    }

    & .offer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 48px;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            gap: 32px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            gap: 16px;
        }

        & > img {
            width: 100px;
            height: 100px;
            ${props => !props.themeState && 
                'filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(296deg) brightness(106%) contrast(101%);'
            }

            @media (max-width: ${({ theme }) => theme.media.large}) {
                width: 85px;
                height: 85px;
            }

            @media (max-width: ${({ theme }) => theme.media.small}) {
                width: 70px;
                height: 70px;
            }
        }

        & > h4 {
            ${getFontsFragment('lg')};
            ${props => !props.themeState && 'color: #FFFFFF;'}

            @media (max-width: ${({ theme }) => theme.media.small}) {
                ${getFontsFragment('md')};
            }
        }
    }
`