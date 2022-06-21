import styled from 'styled-components';
import { getFontsFragment } from '../../../utils/utils';

export const StyledForm = styled.form`
    display: flex;
    max-width: 100%;
    margin-bottom: 13vh;
    padding-left: 24px;
    ${getFontsFragment('md')}
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.generalWhite};
    border: 3px solid ${({ theme }) => theme.colors.strokeColor};
    border-radius: 8px;

    @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
        padding-left: 12px;
    }

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        flex-direction: column;
        gap: 8px;
        padding: 8px;
        background: ${({ theme }) => theme.colors.acceptYellow};
        border: 0;
        border-radius: 0;
    }

    & .button {
        margin: -3px -3px -3px 0;

        @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
            width: 150px;
        }

        @media (max-width: ${({ theme }) => theme.media.large}) {
            width: 115px;
            ${getFontsFragment('md')}
        }

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            width: 100%;
            height: 48px;
            padding: 11px;
            margin: 0;
            border-radius: 4px;
        }
    }
`