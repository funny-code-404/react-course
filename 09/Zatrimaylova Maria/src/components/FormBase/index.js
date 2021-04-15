import React from 'react';
import { connect } from 'react-redux';
import { StyledForm, StyledFormBase, StyledInput, StyledVariablePart } from '../FormBase/style';

const FormBase = (props) => {
    const { children,  onChangeName, onChangeEmail, onChangePassword} = props;
    const handleChangeName = (e) => {
        onChangeName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        onChangeEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        onChangePassword(e.target.value);
    };
    return (
        <StyledForm>
            <StyledFormBase>
                <StyledInput type='text' onChange={handleChangeName}  placeholder='Введите имя' />
                <StyledInput type='text' onChange={handleChangeEmail} placeholder='Введите е-mail' />
                <StyledInput type='text' onChange={handleChangePassword} placeholder='Введите пароль' />
            </StyledFormBase>
            <StyledVariablePart> 
                {children}   
            </StyledVariablePart> 
        </StyledForm>
    )
}

const mapStateToProps = ({ baseForm, checkInForm }) => {
    return {
        baseForm,
        checkInForm,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChangeName: (value) => 
        dispatch({
            type: 'INPUT_NAME',
            payload: value,
        }),
    onChangeEmail: (value) => 
        dispatch({
            type: 'INPUT_EMAIL',
            payload: value,
        }),
    onChangePassword: (value) => 
        dispatch({
            type: 'INPUT_PASSWORD',
            payload: value,
        }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormBase);