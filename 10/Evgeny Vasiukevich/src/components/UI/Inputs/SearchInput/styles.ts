import styled from "styled-components";
import { getFontsFragment } from "../../../../utils/utils";
import iconSearch from '../../../../assets/icons/icon-search.svg';

export const StyledContainer = styled.div`
    flex-basis: 30%;
    flex-grow: 1;

    &::after{
        content: 'Your destination or hotel name';
        position: relative;
        bottom: 110px;
        width: 300px;
        ${getFontsFragment('md')}
        color: ${({ theme }) => theme.colors.generalWhite};

        @media (max-width: ${({ theme }) => theme.media.large}) {
            bottom: 100px;
            ${getFontsFragment('sm')}
        }

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            display: none;
        }
    }
`

export const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.generalWhite};

    @media (max-width: ${({ theme }) => theme.media.large}) {
        ${getFontsFragment('sm')}
    }

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        height: 48px;
        padding-left: 36px;
        background: no-repeat url(${iconSearch}) ${({ theme }) => theme.colors.generalWhite};
        background-position: bottom 16px left 12px; 
        border-radius: 4px;
    }
    
    &::-webkit-input-placeholder { 
        ${getFontsFragment('md')}
        color: ${({ theme }) => theme.colors.textColor};

        @media (max-width: ${({ theme }) => theme.media.large}) {
            ${getFontsFragment('sm')}
        }

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            font-weight: ${({ theme }) => theme.fontWeights.medium};
        }
    }
`