import { ChangeEvent, memo, MouseEvent, useRef, useState } from 'react';
import { auth } from '../../../../firebase';
import { validateEmail } from '../../../../utils/utils';
import SignInButton from '../../Buttons/SignInButton';
import { StyledAuthWindow } from './styles';

const AuthWindow = () => {
    const [validation, setValidation] = useState<boolean>(true);
    const [errorMessage, seterrorMessage] = useState<string>('');
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    function handleSubmit(event: MouseEvent<HTMLFormElement>) {
        event.preventDefault();
        const email = emailRef.current?.value ?? '';
        const password = passwordRef.current?.value ?? '';

        auth.signInWithEmailAndPassword(email, password)
            .catch(error => seterrorMessage(error.message))
    };

    function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        let emailValue = event.target.value;

        if (emailValue === '') {
            setValidation(true);
            return;
        };

        if (validateEmail(emailValue)) {
            setValidation(true);
        } else {
            setValidation(false);
        };
    };

    return (
        <StyledAuthWindow validation={validation}>
            <h4 className='auth__title'>Sign in</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userEmail" className='auth__label'>Email address</label>
                <input 
                    type="email" 
                    name='userEmail' 
                    className='auth__input auth__input--validation'
                    onChange={handleChangeEmail}
                    ref={emailRef}
                />
                <label htmlFor="userPassword" className='auth__label'>Password</label>
                <input 
                    type="password" 
                    name='userPassword' 
                    className='auth__input'
                    ref={passwordRef}
                />
                {errorMessage !== '' &&
                    <p className='auth__message'>{errorMessage}</p>
                }
                <SignInButton />
            </form>
        </StyledAuthWindow>
    );
};

export default memo(AuthWindow);