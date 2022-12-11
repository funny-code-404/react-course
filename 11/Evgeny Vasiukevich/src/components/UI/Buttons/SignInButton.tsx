import React, { memo } from 'react';
import styled from 'styled-components';
import { getFontsFragment } from '../../../utils/utils';

const SignInButton = () => {
    return (
        <StyledButton type='submit'>
            Sign in
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 100%;
    height: 48px;
    padding: 8px;
    ${getFontsFragment('lg')}
    font-weight: ${({theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.generalWhite};
    text-align: center;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.acceptBlue};
    background: ${({ theme }) => theme.colors.acceptBlue};
    transition: all 500ms ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.acceptBlue};
        background: ${({ theme }) => theme.colors.generalWhite};
        border: 2px solid ${({ theme }) => theme.colors.acceptBlue};
    }

    &:active {
        box-shadow: 9px 9px 13px 0px rgba(34, 60, 80, 0.5);
    }

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        height: 38px;
        padding: 8px;
        ${getFontsFragment('md')}
    }
`

export default memo(SignInButton);