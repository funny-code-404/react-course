import React, { MouseEvent } from 'react';

type TForButton = {
    children: string,
    onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

const Button: React.FC<TForButton> = ({children, onClick}: TForButton) => {
    return (
        <button className='button' onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;