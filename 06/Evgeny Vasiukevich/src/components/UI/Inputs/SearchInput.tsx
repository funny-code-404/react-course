import { useContext } from 'react';
import styled from 'styled-components';
import iconSearch from '../../../assets/icons/icon-search.svg';
import { SearchContext } from '../../../context/SearchContext/SearchContext';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { getFontsFragment } from '../../../utils/utils';

const SearchInput = () => {
    const { searchValue, handleChange } = useContext(SearchContext);
    const { width } = useWindowDimensions();

    return (
        <StyledContainer>
            <StyledInput 
                value={searchValue} 
                type="text" 
                placeholder={width <= 768 ? 'Your destination or hotel name' : 'Search...'}
                onChange={handleChange}
            />
        </StyledContainer>
    );
};

export default SearchInput;

const StyledContainer = styled.div`
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

const StyledInput = styled.input`
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