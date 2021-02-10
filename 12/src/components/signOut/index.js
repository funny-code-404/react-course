import { connect } from "react-redux";

import { signOutRequested } from "../../ducks/auth/actions";
import './signOut.css';

export const SignOut = ({ auth, singOut }) => {
	
	const handleSignOut = () => {
		singOut()
	}

	return  (
		Boolean(auth.user) && 
		<button 
			onClick={handleSignOut} 
			className='sign-out'
		>
			Sign out
		</button> 
	)
}

const mapStateToProps = state => state;

const mapDispatchToProps = ( dispatch ) => ({
	singOut: () => dispatch(signOutRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);