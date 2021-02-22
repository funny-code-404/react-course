// import { useContext } from "react";
import { withRouter, Link, Redirect } from 'react-router-dom';
import { auth } from '../../firebase';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const LogIn = ({ history, email }) => {
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            await auth.signInWithEmailAndPassword(email.value, password.value)
            history.push('/')
        } catch (error) {
            alert(error)
        }
    }
    return Boolean(email) ? <Redirect to={{ pathname: '/' }} /> : (
        <div className='login'>
            <h1>
                Log In
           </h1>
            <form onSubmit={handleLogin}>
                <label> <span>Email</span>
                    <input name='email' type='email' placeholder='email' />
                </label>
                <label> <span>Password</span>
                    <input name='password' type='password' placeholder='password' />
                </label>
                <button type='submit' className='form_btn' >Login</button>
            </form>
            <p>or</p>
            <Link to='/signup'>Sign up</Link>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        email: state.firebase.auth.email
    };
};
LogIn.propTypes = {
    history: PropTypes.object,
    email: PropTypes.string
}
LogIn.defaultProps = {
    email: undefined,
    history: undefined
}
export default connect(mapStateToProps)(withRouter(LogIn));