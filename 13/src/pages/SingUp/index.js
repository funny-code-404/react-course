import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import { getSignUpRequested } from "../../ducks/auth/actions";

export const SingUp = ({ auth, getSignUp }) => {
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements
		getSignUp(email.value, password.value)
	}

	return auth.user ? <Redirect to={{ pathname: '/' }} /> : (
		<div className='form-box'>
            <h1>
                Sign up
           </h1>
            <form onSubmit={handleSubmit}>
                <label> <span>Email</span>
                    <input name='email' type='email'/>
                </label>
                <label> <span>Password</span>
                    <input name='password' type='password'/>
                </label>
                <button type='submit' className='form_btn'>Sign up</button>
            </form>
            <div className='create-account-box'>
                <p>Already registered ?</p>
                <Link to='/login'>Login</Link>
            </div>
        </div>
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = ( dispatch ) => ({
	getSignUp: (email, password) => dispatch(getSignUpRequested(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);