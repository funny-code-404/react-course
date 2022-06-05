import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';
import { getFontsFragment } from '../../../utils/utils';

type TForButton = {
    children: string,
    onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

const Button: React.FC<TForButton> = ({children, onClick}: TForButton) => {
    return (
        <ButtonStyled className='button' onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
    width: 190px;
    padding: 20px;
    ${getFontsFragment('lg')}
    font-weight: ${baseTheme.fontWeights.medium};
    color: ${baseTheme.colors.generalWhite};
    background: ${baseTheme.colors.acceptBlue};
    border-radius: 8px;
    border: 3px solid ${baseTheme.colors.acceptBlue};
    transition: 0.5s ease-in-out;

    &:hover {
        color: ${baseTheme.colors.acceptBlue};
        background: ${baseTheme.colors.generalWhite};
        border: 3px solid ${baseTheme.colors.acceptBlue};
    }

    &:active {
        background: ${baseTheme.colors.darkMode1};
    }
`

export default Button;