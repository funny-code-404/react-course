import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from "styled-components";
import { getFontsFragment } from "../../../../utils/utils";

export const StyledWrapper = styled.div<
{ 
    border: string | FlattenInterpolation<ThemeProps<DefaultTheme>>,
    child: number
 }>`
    flex-basis: 20%;
    max-height: 64px;
    margin: -3px 0;

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        display: flex;
        margin: 0;

        & .react-datepicker-wrapper::before {
            content: 'Check-in date';
            position: relative;
            top: 0px;
            left: 16px;
            width: 200px;
            ${getFontsFragment('xs')}
            color: ${({ theme }) => theme.colors.textColor};     
        }
    
        & .react-datepicker-wrapper ~ .react-datepicker-wrapper::before {
            content: 'Check-out date';    
        }

        & .react-datepicker-wrapper:nth-child(1) {
            margin-right: 8px;
        }
    }

    &::after{
        content: 'Check-in – Check-out';
        position: relative;
        bottom: 110px;
        left: 24px;
        width: 300px;
        ${getFontsFragment('md')}
        color: ${({ theme }) => theme.colors.generalWhite};

        @media (max-width: ${({ theme }) => theme.media.large}) {
            bottom: 100px;
            left: 12px;
            ${getFontsFragment('sm')}
        }

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            display: none;
        }
    }

    & .react-datepicker-wrapper {
        height: 100%;
        border: 1px solid #CECECE;
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.generalWhite};
        ${props => props.border}

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            height: 48px;
            border: none;
            border-radius: 4px;
        }
    }
    
    & .react-datepicker-wrapper:nth-child(${props => props.child}) {
        ${props => props.border}
    }
    
    & .react-datepicker__input-container {
        display: flex;
        align-items: center;
        height: 100%;
    }

    input {
        width: 100%;
        height: 100%;
        padding: 0 12px;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            padding-left: 12px;
            ${getFontsFragment('sm')}
        }

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            padding-left: 16px;
            margin-top: -44px;
            padding-top: 17px;
            font-weight: ${({ theme }) => theme.fontWeights.medium}
        }
    }

    input::-webkit-input-placeholder { 
        ${getFontsFragment('md')}
        color: ${({ theme }) => theme.colors.textColor};
        text-align: center;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            ${getFontsFragment('sm')}
        }
    }

    & .react-datepicker {
        font-family: ${({ theme }) => theme.fonts.generalFont};
        font-weight: 300;
        ${getFontsFragment('sm')}
        color: ${({ theme }) => theme.colors.darkMode3};
        border-radius: 8px;
        border: none;
    }

    & .react-datepicker__header, 
    .react-datepicker__header--custom {
        background: ${({ theme }) => theme.colors.generalWhite};
        border-bottom: none;
    }

    & .react-datepicker__current-month {
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        ${getFontsFragment('md')}
        color: ${({ theme }) => theme.colors.textColor};
    }

    & .react-datepicker__day-names {
        margin-top: 11px;
    }

    & .react-datepicker__day {
        width: 35px;
        margin: 0;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        line-height: 35px;
        text-align: center;
    }

    & .react-datepicker__day--in-range {
        color: ${({ theme }) => theme.colors.darkMode3};
        background: ${({ theme }) => theme.colors.strokeColor};
        border-radius: 0;
    }

    & .react-datepicker__day--in-selecting-range {
        color: ${({ theme }) => theme.colors.darkMode3};
        background: ${({ theme }) => theme.colors.strokeColor};
        border-radius: 0;
    }

    & .react-datepicker__day--range-end, 
    .react-datepicker__day--selecting-range-start {
        color: ${({ theme }) => theme.colors.generalWhite};
        background: ${({ theme }) => theme.colors.acceptBlue} ;
    }

    & .react-datepicker__day--keyboard-selected {
        color: ${({ theme }) => theme.colors.generalWhite};
        background: ${({ theme }) => theme.colors.acceptBlue};
        border-radius: 0;
    }

    & .react-datepicker__triangle {
        display: none;
    }
`