import styled from 'styled-components';
import { getFontsFragment } from '../../../utils/utils';

export const StyledContainer = styled.div<{isOpen: boolean}>`
    position: relative;
    max-width: 600px;
    margin: -3px 0;
    border-radius: 8px;
    border: 3px solid ${({ theme }) => theme.colors.generalWhite};
    ${props => props.isOpen ? ({ theme}) => `border: 3px solid ${theme.colors.acceptYellow};` : ''}

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        max-width: 100%;
        margin: 0;
        border-radius: 4px;
        border: 3px solid ${({ theme }) => theme.colors.acceptYellow};
        background: ${({ theme }) => theme.colors.generalWhite};
    }
`

export const StyledCounter = styled.div`
    padding: 18px 20px 18px 12px;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media.large}) {
        padding:  18px 10px 18px 12px;
    }

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        display: flex;
        padding: 0;
        height: 48px;
    }

    & div {
        flex-grow: 1;
        position: relative;
        padding: 8px;
    }

    & div:not(:last-child):after {
        content: "";
        position: absolute;
        top: 19%;
        right: 0;
        bottom: 19%;
        border-right: 1px solid ${({ theme }) => theme.colors.secondaryText};
    }

    & h6 {
        ${getFontsFragment('xs')}
        font-weight: ${({ theme }) => theme.fontWeights.regular};
    }

    & p {
        ${getFontsFragment('md')}

        @media (max-width: ${({ theme }) => theme.media.large}) {
            ${getFontsFragment('sm')}
        }

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            font-weight: ${({ theme }) => theme.fontWeights.medium};
        }
    }
`

export const StyledModalCounter = styled.div`
    position: absolute;
    top: 77px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 260px;
    padding: 22px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.generalWhite};
`

export const StyledRowCounter = styled.div`
    display: flex;
    align-items: center;
    ${getFontsFragment('md')}
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    background: ${({ theme }) => theme.colors.generalWhite};

    @media (max-width: ${({ theme }) => theme.media.large}) {
        ${getFontsFragment('sm')}
    }

    & > .category {
        flex-grow: 1;
    }

    & > .count {
        flex-basis: 20%;
        text-align: center;
    }
`

export const StyledChoose = styled.div`
    ${getFontsFragment('sm')}

    & p {
        margin-bottom: 12px;
    }

    & select {
        width: 100px;
        height: 30px;
        border: 1px solid ${({ theme }) => theme.colors.acceptBlue};
    }
`