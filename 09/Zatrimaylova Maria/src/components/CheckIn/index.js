import React from 'react';
import { connect } from 'react-redux';
import FormBase from '../FormBase';
import { StyledInput, StyledButton, StyledCheckIn } from './style.js';

const CheckIn = (props) => {
    const { onChangeCheckbox, onChangeYearOfBirth, onChangePhoneNumber, onChangeCheckInButton, onChangeLastName} = props;

    const handleChangeCheckbox = () => onChangeCheckbox();
    const handleChangeLastName = (e) => onChangeLastName(e.target.value);
    const handleChangeYearOfBirth = (e) => onChangeYearOfBirth(e.target.value);
    const handleChangePhoneNumber = (e) => onChangePhoneNumber(e.target.value);
    const handleCheckInButton = (e) => {
        e.preventDefault();
        onChangeCheckInButton();
    }

    return (
        <FormBase>
            <StyledCheckIn>
                <h3>Регистрация</h3>
                <input type="checkbox" onChange={handleChangeCheckbox} />
                <StyledInput type='text' onChange={handleChangeLastName} placeholder='Введите фамилию' />
                <StyledInput type='text' onChange={handleChangeYearOfBirth} placeholder='Введите год рождения' />
                <StyledInput type='text' onChange={handleChangePhoneNumber} placeholder='Введите номер телефона' />
                <StyledButton onClick={handleCheckInButton} >Зарегистрироваться</StyledButton>
            </StyledCheckIn>
        </FormBase>
    )
}

const mapStateToProps = ({ checkInForm }) => {
    return {
        checkInForm,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChangeCheckbox: () => 
        dispatch({
            type: 'INPUT_CHECKOUT',
        }),
    onChangeLastName: (value) => 
        dispatch({
            type: 'INPUT_LAST_NAME',
            payload: value,
        }),
    onChangeYearOfBirth: (value) => 
        dispatch({
            type: 'INPUT_YEAR_OF_BIRTH',
            payload: value,
        }),   
    onChangePhoneNumber: (value) => 
        dispatch({
            type: 'INPUT_PHONE_NUMBER',
            payload: value,
        }),
    onChangeCheckInButton: () => 
        dispatch({
            type: 'CHECK_IN_BUTTON',
        }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckIn);