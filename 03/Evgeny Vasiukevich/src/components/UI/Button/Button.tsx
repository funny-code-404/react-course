import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { acceptBlue, darkMode1, fwMedium, generalWhite, textLg } from '../../../styles/config/variables';

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
    ${textLg}
    font-weight: ${fwMedium};
    color: ${generalWhite};
    background: ${acceptBlue};
    border-radius: 8px;
    border: 3px solid ${acceptBlue};
    transition: 0.5s ease-in-out;

    &:hover {
        color: ${acceptBlue};
        background: ${generalWhite};
        border: 3px solid ${acceptBlue};
    }

    &:active {
        background: ${darkMode1};
    }
`

export default Button;