import { useContext } from "react";
import { useHistory, Link, Redirect } from 'react-router-dom';

import { auth } from '../../firebase';
import { AuthContext } from "../../components/context/Auth.context";

const LogIn = () => {
    const history = useHistory();
    const { currentUser } = useContext(AuthContext);
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            await auth.signInWithEmailAndPassword(email.value, password.value)
            history.push('/')
        } catch (error) {
            alert(error)
        }
    };
    return currentUser ? <Redirect to={{ pathname: '/' }} /> : (
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
export default LogIn;