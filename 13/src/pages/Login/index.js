import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import { getLoginRequested } from "../../ducks/auth/actions";

export const Login = ({ auth, getLogin }) => {
	
	const handleSubmit = (e) => {
		e.preventDefault();
        const { email, password } = e.target.elements
		getLogin(email.value, password.value)
	}

	return auth.user ? <Redirect to={{ pathname: '/' }} /> : (
		<div className='form-box'>
            <h1>
                Log In
           </h1>
            <form onSubmit={handleSubmit}>
                <label> <span>Email</span>
                    <input name='email' type='email'/>
                </label>
                <label> <span>Password</span>
                    <input name='password' type='password'/>
                </label>
                <button type='submit' className='form_btn' >Login</button>
            </form>
            <div className='create-account-box'>
                <p>Create your account :</p>
                <Link to='/signup'>Sign up</Link>
            </div>
        </div>
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = ( dispatch ) => ({
	getLogin: (email, password) => dispatch(getLoginRequested(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);