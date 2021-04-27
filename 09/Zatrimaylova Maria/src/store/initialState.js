import { initialBaseFormState, initialCheckInFormState, initialLogInFormState, initialDeletingFormState } 
from './rootReducer';

export const initialState = {
    baseForm: initialBaseFormState,
    checkInForm: initialCheckInFormState,
    logInForm: initialLogInFormState,
    deletingForm: initialDeletingFormState,
} 