import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';
import { getFontsFragment } from '../../../utils/utils';

type Props = {
    searchValue: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const SearchInput = ({searchValue, onChange}: Props) => {
    return (
        <StyledContainer>
            <StyledInput value={searchValue} type="text" placeholder='Search...' onChange={onChange}/>
        </StyledContainer>
    );
};

export default SearchInput;

const StyledContainer = styled.div`
    &::after{
        content: 'Your destination or hotel name';
        position: relative;
        bottom: 120px;
        width: 300px;
        ${getFontsFragment('md')}
    }
`

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    
    &::-webkit-input-placeholder { 
        ${getFontsFragment('md')}
        color: ${baseTheme.colors.textColor}; 
    }
`