import React from 'react';

import { StyledButton, StyledLogInContainer, StyledText, StyledTitle } from './style.js';

const WithLogIn = () => {
    return (
        <div>
            <StyledTitle>Вход</StyledTitle>
            <StyledLogInContainer>
                <div>
                    <input type="checkbox" />
                    <StyledText>Oставить <br /> меня в системе</StyledText>
                </div>
               <StyledButton>Войти</StyledButton> 
            </StyledLogInContainer>
            
        </div>
    )
}

export default WithLogIn();