import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';

export const SignUp = ({ history }) => {

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

SignUp.propTypes = {
    history: PropTypes.object,
}
SignUp.defaultProps = {
    history: undefined,
}
export default withRouter(SignUp);