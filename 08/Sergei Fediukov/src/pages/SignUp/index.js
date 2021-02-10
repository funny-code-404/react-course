import { useHistory, Link } from 'react-router-dom';

import { auth } from '../../firebase';


const SignUp = () => {
    const history = useHistory();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            await auth.createUserWithEmailAndPassword(email.value, password.value)
            history.push('/')
        } catch (error) {
            alert(error)
        }
    };
    return (
        <div className='signup'>
            <h1>
                Sign Up
           </h1>
            <form onSubmit={handleSignUp}>
                <label> <span>Email</span>
                    <input name='email' type='email' placeholder='email' />
                </label>
                <label> <span>Password</span>
                    <input name='password' type='password' placeholder='password' />
                </label>
                <button type='submit' className='form_btn' >Sign Up</button>
            </form>
            <p>or</p>
            <Link to='/login'>Log in</Link>
        </div>
    );
};
export default SignUp;