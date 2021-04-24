import { combineReducers } from 'redux';

export const initialBaseFormState = {
    name: '',
    email: '',
    password: '',
};

export const initialCheckInFormState = {
    checkout: false,
    lastName: '',
    yearOfBirth: '',
    phoneNumber: '',
    checkInButton: false,
}; 

export const initialLogInFormState = {
    checkoutLogIn: false,
    logInButton: false,
};

export const initialDeletingFormState = {
    text: '',
    rate: null,
    deletingButton: false,
};

export const baseForm = (prevState = initialBaseFormState, action) => {
    switch(action.type) {
        case 'INPUT_NAME': 
            return {
                ...prevState,
                name: action.payload,
        };
        case 'INPUT_EMAIL': 
            return {
                ...prevState,
                email: action.payload,
        };
        case 'INPUT_PASSWORD': 
            return {
                ...prevState,
                password: action.payload,
        };
        default: {
            return {
                ...prevState,
            }
        };
    }
}

export const checkInForm = (prevState = initialCheckInFormState, action) => {
    switch(action.type) {
        case 'INPUT_CHECKOUT': 
            return {
                ...prevState,
                checkout: !prevState.checkout,
        };
        case 'INPUT_LAST_NAME': 
            return {
                ...prevState,
                lastName: action.payload,
        };
        case 'INPUT_YEAR_OF_BIRTH': 
            return {
                ...prevState,
                yearOfBirth: action.payload,
        };
        case 'INPUT_PHONE_NUMBER': 
            return {
                ...prevState,
                phoneNumber: action.payload,
        };
        case 'CHECK_IN_BUTTON': 
            return {
                ...prevState,
                checkInButton: true,
        };
        default: {
            return {
                ...prevState,
            }
        };
    }
};

export const logInForm = (prevState = initialLogInFormState, action) => {
    switch(action.type) {
        case 'INPUT_LOG_IN_CHECKOUT': 
            return {
                ...prevState,
                checkoutLogIn: !prevState.checkout,
        };
        case 'LOG_IN_BUTTON': 
            return {
                ...prevState,
                logInButton: true,
        };
        default: {
            return {
                ...prevState,
            }
        };
    }
};

export const deletingForm = (prevState = initialDeletingFormState, action) => {
    switch(action.type) {
        case 'INPUT_TEXT': 
            return {
                ...prevState,
                text: action.payload,
        };
        case 'INPUT_RATE': 
            return {
                ...prevState,
                rate: action.payload,
        };
        case 'DETELE_BUTTON': 
            return {
                ...prevState,
                deletingButton: true,
        };
        default: {
            return {
                ...prevState,
            }
        };
    }
}

export default combineReducers({
    baseForm,
    checkInForm,
    logInForm,
    deletingForm,
});