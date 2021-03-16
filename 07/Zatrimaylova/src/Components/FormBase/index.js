import React from 'react';

import { StyledForm, StyledFormBase, StyledInput, StyledVariablePart } from '../FormBase/styles';

const FormBase = ({ variablePart }) => {
    return (
        <StyledForm>
            <StyledFormBase>
                <StyledInput type='text' placeholder='Введите имя' />
                <StyledInput type='text' placeholder='Введите е-mail' />
                <StyledInput type='text' placeholder='Введите пароль' />
            </StyledFormBase>
            {variablePart && <StyledVariablePart>
                {variablePart}   
            </StyledVariablePart> }  
        </StyledForm>
    )
}

export default FormBase;