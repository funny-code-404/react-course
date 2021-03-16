import React from 'react';

import { StyledInput, StyledButton, StyledCheckIn } from './style.js';

const WithCheckIn = () => {
    return (
        <StyledCheckIn>
            <h3>Регистрация</h3>
            <input type="checkbox" />
            <StyledInput type='text' placeholder='Введите фамилию' />
            <StyledInput type='text' placeholder='Введите год рождения' />
            <StyledInput type='text' placeholder='Введите номер телефона' />
            <StyledButton>Зарегистрироваться</StyledButton>
        </StyledCheckIn>
    )
}

export default WithCheckIn();