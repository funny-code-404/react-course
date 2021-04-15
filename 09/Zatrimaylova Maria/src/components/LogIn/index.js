import React from 'react';
import { connect } from 'react-redux';
import FormBase from '../FormBase';
import { StyledButton, StyledLogInContainer, StyledText, StyledTitle } from './style.js';

const LogIn = (props) => {
    const { onChangeCheckbox, onChangeLogInButton } = props;

    const handleChangeCheckbox = () => onChangeCheckbox();
    const handleLogInButton = (e) => {
        e.preventDefault();
        onChangeLogInButton();
    }

    return (
        <FormBase>
            <div>
                <StyledTitle>Вход</StyledTitle>
                <StyledLogInContainer>
                    <div>
                        <input type="checkbox" onChange={handleChangeCheckbox} />
                        <StyledText>Oставить <br /> меня в системе</StyledText>
                    </div>
                <StyledButton onClick={handleLogInButton}>Войти</StyledButton> 
                </StyledLogInContainer>    
            </div>
        </FormBase>
    )
}

// export const logInForm = (prevState = initialLogInFormState, action) => {
//     switch(action.type) {
//         case 'INPUT_CHECKOUT': 
//             return {
//                 ...prevState,
//                 checkout: !prevState.checkout,
//         };
//         case 'CHECK_IN_BUTTON': 
//             return {
//                 ...prevState,
//                 logInButton: true,
//         };
//         default: {
//             return {
//                 ...prevState,
//             }
//         };
//     }
// };

const mapStateToProps = ({ logInForm }) => {
    return {
        logInForm,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChangeCheckbox: (value) => 
        dispatch({
            type: 'INPUT_LOG_IN_CHECKOUT',
            payload: value,
        }),
    onChangeLogInButton: () => 
        dispatch({
            type: 'LOG_IN_BUTTON',
        }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LogIn);