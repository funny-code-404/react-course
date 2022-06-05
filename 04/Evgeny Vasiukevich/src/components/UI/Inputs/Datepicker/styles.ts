import styled from "styled-components";
import { baseTheme } from "../../../../styles/theme";
import { getFontsFragment } from "../../../../utils/utils";

export const StyledWrapper = styled.div<{border: string}>`
    flex-basis: 25%;

    &::after{
        content: 'Check-in — Check-out';
        position: relative;
        bottom: 120px;
        left: 24px;
        width: 300px;
        ${getFontsFragment('md')}
    }

    & .react-datepicker-wrapper {
        height: 100%;
        border: 1px solid #CECECE;
        border-radius: 8px;
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
        padding-left: 24px;
    }

    input::-webkit-input-placeholder { 
        ${getFontsFragment('md')}
        color: ${baseTheme.colors.textColor};
    }

    & .react-datepicker {
        font-family: ${baseTheme.fonts.generalFont};
        font-weight: 300;
        ${getFontsFragment('sm')}
        color: ${baseTheme.colors.darkMode3};
        border-radius: 8px;
        border: none;
    }

    & .react-datepicker__header--custom {
        background: white;
        border-bottom: none;
    }

    & .react-datepicker__current-month {
        font-weight: ${baseTheme.fontWeights.medium};
        ${getFontsFragment('md')}
        color: ${baseTheme.colors.textColor};
    }

    & .react-datepicker__day-names {
        margin-top: 11px;
    }

    & .react-datepicker__day {
        width: 35px;
        margin: 0;
        font-size: ${baseTheme.fontSizes.sm};
        line-height: 35px;
        text-align: center;
    }

    & .react-datepicker__day--in-range {
        color: ${baseTheme.colors.darkMode3};
        background: ${baseTheme.colors.strokeColor};
        border-radius: 0;
    }

    & .react-datepicker__day--in-selecting-range {
        color: ${baseTheme.colors.darkMode3};
        background: ${baseTheme.colors.strokeColor};
        border-radius: 0;
    }

    & .react-datepicker__day--range-end {
            color: ${baseTheme.colors.generalWhite};
            background: ${baseTheme.colors.acceptBlue} ;
    }

    & .react-datepicker__day--keyboard-selected {
        color: ${baseTheme.colors.generalWhite};
        background: ${baseTheme.colors.acceptBlue};
        border-radius: 0;
    }

    & .react-datepicker__triangle {
        display: none;
    }
`