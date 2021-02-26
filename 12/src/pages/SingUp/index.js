import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import { getSignUpRequested } from "../../ducks/auth/actions";
import { en } from "../config";
import { paths } from "../../config";

export const SingUp = ({ auth, getSignUp }) => {
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements
		getSignUp(email.value, password.value)
	}

	return auth.user ? <Redirect to={{ pathname: paths.home }} /> : (
		<div className='form-box'>
            <h1>{ en.sign_up }</h1>
            <form onSubmit={handleSubmit}>
                <label> <span>{ en.email }</span>
                    <input name='email' type='email'/>
                </label>
                <label> <span>{ en.password }</span>
                    <input name='password' type='password'/>
                </label>
                <button type='submit' className='form_btn'>{ en.sign_up }</button>
            </form>
            <div className='create-account-box'>
                <p>{ en.registered }</p>
                <Link to={paths.login}>{ en.login }</Link>
            </div>
        </div>
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = ( dispatch ) => ({
	getSignUp: (email, password) => dispatch(getSignUpRequested(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);