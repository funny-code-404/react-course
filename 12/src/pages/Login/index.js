import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import { getLoginRequested } from "../../ducks/auth/actions";
import { paths } from "../../config";
import { en } from "../config";

export const Login = ({ auth, getLogin }) => {
	
	const handleSubmit = (e) => {
		e.preventDefault();
        const { email, password } = e.target.elements
		getLogin(email.value, password.value)
	}

	return auth.user ? <Redirect to={{ pathname: paths.home }} /> : (
		<div className='form-box'>
            <h1>{ en.log_in }</h1>
            <form onSubmit={handleSubmit}>
                <label> <span>{ en.email }</span>
                    <input name='email' type='email'/>
                </label>
                <label> <span>{ en.password }</span>
                    <input name='password' type='password'/>
                </label>
                <button type='submit' className='form_btn' >{ en.login }</button>
            </form>
            <div className='create-account-box'>
                <p>{ en.create_account }</p>
                <Link to={paths.signup}>{ en.sign_up }</Link>
            </div>
        </div>
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = ( dispatch ) => ({
	getLogin: (email, password) => dispatch(getLoginRequested(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);