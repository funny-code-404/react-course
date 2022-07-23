import React, { memo, MouseEvent } from 'react';
import styled from 'styled-components';
import { getFontsFragment } from '../../../utils/utils';

type TForButton = {
    children: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
}

const Button: React.FC<TForButton> = ({children, onClick}) => {
    return (
        <ButtonStyled className='button' onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
    width: 190px;
    height: 64px;
    padding: 10px;
    ${getFontsFragment('lg')}
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.generalWhite};
    background: ${({ theme }) => theme.colors.acceptBlue};
    border-radius: 8px;
    border: 3px solid ${({ theme }) => theme.colors.acceptBlue};
    transition: 0.5s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.acceptBlue};
        background: ${({ theme }) => theme.colors.generalWhite};
        border: 3px solid ${({ theme }) => theme.colors.acceptBlue};
    }

    &:active {
        background: ${({ theme }) => theme.colors.darkMode1};
    }
`

export default memo(Button);