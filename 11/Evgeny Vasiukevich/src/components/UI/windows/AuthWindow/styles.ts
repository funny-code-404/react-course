import styled from "styled-components";
import { getFontsFragment } from "../../../../utils/utils";

export const StyledAuthWindow = styled.div<{validation: boolean}>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 36px 40px;
    margin: 0 auto;
    border: 1px solid #CECECE;
    background: ${({ theme }) => theme.colors.generalWhite};

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        width: 80%;
        padding: 18px 20px;
    }

    .auth__title {
        margin-bottom: 40px;
        ${getFontsFragment('lg')}
        font-weight: ${({theme }) => theme.fontWeights.medium};
        text-align: center;

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            margin-bottom: 20px;
            ${getFontsFragment('md')}
        }
    }

    .auth__label {
        ${getFontsFragment('sm')}
        font-weight: 300;
        color: #333333;

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            ${getFontsFragment('xs')}
        }
    }

    .auth__input {
        width: 100%;
        height: 41px;
        margin-top: 8px;
        margin-bottom: 16px;
        padding: 0 12px;
        ${getFontsFragment('sm')}
        border: 2px solid #CECECE;
        border-radius: 8px;

        &:focus {
            box-shadow: 4px 4px 7px 0px rgba(34, 60, 80, 0.2);
        }

        &--validation {
            position: relative;
            border: 2px solid ${(props) => props.validation ? '#CECECE' : '#B22222'};
        }

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            height: 33px;
            margin-bottom: 12px;
            ${getFontsFragment('xs')}
        }
    }

    &::after {
        ${props => props.validation && 'display: none;'}
        content: 'Your email is not valid...';
        position: absolute;
        top: 176px;
        left: 40px;
        ${getFontsFragment('sm')}
        color: #B22222;

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            top: 126px;
            left: 20px;
            ${getFontsFragment('xs')}
        }
    }

    .auth__input ~ .auth__input {
        margin-bottom: 24px;
    }

    .auth__message {
        margin-bottom: 20px;
        ${getFontsFragment('sm')}
        color: #B22222;
    }
`